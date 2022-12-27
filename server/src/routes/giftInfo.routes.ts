import { Router } from 'express'
import * as giftInfoService from '../services/giftInfoService'
import * as path from 'path'
import Excel from 'exceljs'
import moment from 'moment'

const giftInfoRouter = Router();

giftInfoRouter.get('/report', async (request, response) => {
    try {
        const changeTextStatus = (text) => {
            switch (text) {
                case "CHUA_DANG_KY":
                    return "Chưa đăng ký"
                case "DA_DANG_KY":
                    return "Đã đăng ký"
                case "CHO_PHE_DUYET":
                    return "Chờ phê duyệt"
                case "CHO_PHE_DUYET_HUY":
                    return "Chờ phê duyệt hủy"
                case "DA_DANG_KY_TU_CHOI_HUY":
                    return "Từ chối hủy (Đã đăng ký)"
                case "HET_HAN":
                    return "Hết hạn"
            }
        }
        const data = await giftInfoService.report(request.query)
        const filePath = path.join(__dirname, './resources/export-template/excel/danh_sach_khach_hang_dang_ky_dich_vu_phong_cho.xlsx') // filepath build server
        // const filePath = path.join(__dirname, '../resources/export-template/excel/danh_sach_khach_hang_dang_ky_dich_vu_phong_cho.xlsx') //filepath local

        const workbook = new Excel.Workbook()
        const content = await workbook.xlsx.readFile(filePath)
        const worksheet = content.worksheets[0]
        let rowStartIndex = 4
        let count = 1;

        const fromDate = moment(request.query.from_date.toString()).format("DD/MM/YYYY")
        const toDate = moment(request.query.to_date.toString()).format("DD/MM/YYYY")
        worksheet.getRow(2).getCell(1).value = `Từ ngày: ${fromDate} Đến ngày: ${toDate}`

        data.forEach(item => {
            worksheet.getRow(rowStartIndex).getCell(1).value = count
            worksheet.getRow(rowStartIndex).getCell(2).value = item.branch_code
            worksheet.getRow(rowStartIndex).getCell(3).value = item.cif
            worksheet.getRow(rowStartIndex).getCell(4).value = item.cust_issue_no
            worksheet.getRow(rowStartIndex).getCell(5).value = item.cust_name
            worksheet.getRow(rowStartIndex).getCell(6).value = item.card_no
            worksheet.getRow(rowStartIndex).getCell(7).value = item.loc
            worksheet.getRow(rowStartIndex).getCell(8).value = item.gift_date
            worksheet.getRow(rowStartIndex).getCell(9).value = item.exp_date
            worksheet.getRow(rowStartIndex).getCell(10).value = item.participant_name
            worksheet.getRow(rowStartIndex).getCell(11).value = item.participant_phone
            worksheet.getRow(rowStartIndex).getCell(12).value = item.participant_at
            worksheet.getRow(rowStartIndex).getCell(13).value = item.lounge_area_name
            worksheet.getRow(rowStartIndex).getCell(14).value = item.approved_at
            worksheet.getRow(rowStartIndex).getCell(15).value = changeTextStatus(item.status)
            worksheet.getRow(rowStartIndex).getCell(16).value = item.user_send_approve
            worksheet.getRow(rowStartIndex).getCell(17).value = item.registered_updated_canceled_at ? moment(item.registered_updated_canceled_at).format("DD/MM/YYYY - HH:mm") : ''
            if (data.length > count) {
                worksheet.duplicateRow(rowStartIndex, 1, true)
                rowStartIndex++
                count++
            }
        })

        response.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        response.setHeader("Content-Disposition", `attachment; filename=danh_sach_khach_hang_dang_ky_dich_vu_phong_cho.xlsx`);

        return workbook.xlsx.write(response).then(() => {console.log("SUCCESS")
            response.status(200);
        });
    } catch (err) {
        response.send({
            status: "error",
            message: "Something went wrong",
        });
    }

    // var workbook = XLSX.readFile()
    // var sheet = workbook.Sheets[workbook.SheetNames[0]]

    // XLSX.utils.json_to_sheet(data);

    // function s2ab(s) {
    //     var buf = new ArrayBuffer(s.length);
    //     var view = new Uint8Array(buf);
    //     for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    //     return buf;
    // }

    // var wbout = XLSX.writeXLSX(workbook, { bookType: 'xlsx', type: 'buffer', cellStyles: true });

    // //return workbook;
    // response.setHeader(
    //     "Content-Type",
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    // );
    // response.attachment("Testing.xlsx");
    // // response.setHeader(
    // //     "Content-Disposition",
    // //     "attachment; filename=" + "tutorials.xlsx"
    // // );
    // return response.status(200).send(wbout);

});

export default giftInfoRouter;