<template>
    <div class="basedSummary">
        <main>
            <el-table :data="tableData" stripe border :header-row-style="{'color':'#000'}" :span-method="objectSpanMethod">
                <el-table-column fixed align="center" prop="areaName" label="区域名称" width="100" show-overflow-tooltip></el-table-column>
                <el-table-column fixed align="center" prop="branchName" label="分公司名称" width="120" show-overflow-tooltip></el-table-column>
                <el-table-column fixed align="center" prop="projectName" label="项目名称" width="120" show-overflow-tooltip></el-table-column>
                <el-table-column align="center" prop="architectureArea" label="总建筑面积" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="totalHouseholds" label="总户数" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="residentialHouseholds" label="总住宅户数" width="120" label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="residentialHardcover" label="总住宅精装户数" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="residentialBlank" label="总住宅毛坯户数" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="residentialChargingArea" label="住宅收费面积" width="120" label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="businessHouseholds" label="总商业户数" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="businessChargingArea" label="商业收费面积" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="officeHouseholds" label="总办公楼户数" width="120" label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="officeChargingArea" label="办公楼收费面积" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="projectType" label="业态类型" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" label="物业费" show-overflow-tooltip label-class-name="project">
                    <template slot-scope="scope">
                        <span>{{scope.row.projectType}}物业费不对</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="totalBuilding" label="楼栋总数" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="parkingFee" label="车位管理费" width="120" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="plotRatio" label="容积率" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="afforestationRate" label="绿化率" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="areaCovered" label="占地面积" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="afforestedArea" label="绿化面积" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" width="120px" prop="groundArea" label="地上总建筑面积" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" width="120px" prop="totalBasementArea" label="地库总面积" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="abovegroundVehicleParkingSpaceNum" width="150px" label="地上机动车车位数量" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="undergroundVehicleParkingSpaceNum" width="150px" label="地下机动车车位数量" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="developmentCompany" label="开发公司" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="designCompany" label="设计公司" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="currentIssue" width="120px" label="当前期次" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="deliveryDate" width="120px" label="当期交付日期" show-overflow-tooltip label-class-name="project"></el-table-column>
                <el-table-column align="center" prop="inspTotalArea" width="120px" label="查验总面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspBuildNum" width="120px" label="查验楼栋数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspResidentialBuildNum" width="120px" label="查验住宅楼栋数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspCommercialBuildNum" width="120px" label="查验商业楼栋数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspOfficeBuildNum" width="140px" label="查验办公楼楼栋数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspTotalHouseholdsNum" width="120px" label="查验住宅总户数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspHardboundHouses" width="140px" label="查验住宅精装户数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspRoughcastHouses" width="140px" label="查验住宅毛坯户数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspIndoorArea" width="120px" label="查验户内面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspPublicArea" width="120px" label="查验公区面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspCommercialHouseholds" width="140px" label="查验商业户数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspCommercialIndoorArea" width="140px" label="查验商业户内面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspCommercialPublicArea" width="140px" label="查验商业公区面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspOfficeHouses" width="140px" label="查验办公楼户数" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspOfficeIndoorArea" width="150px" label="查验办公楼户内面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspOfficePublicArea" width="150px" label="查验办公楼公区面积" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspBusinessTypeName" width="140px" label="查验业态类型" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="startTime" width="140px" label="承查启动会日期" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="endTime" width="140px" label="承查计划结束日期" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspActualStartDate" width="140px" label="承查实际开始日期" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="inspActualEndDate" width="140px" label="承查实际结束日期" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="contractDeliveryDate" width="140px" label="合同交房日期" show-overflow-tooltip label-class-name="plan"></el-table-column>
                <el-table-column align="center" prop="plannedDeliveryDate" width="140px" label="计划交房日期" show-overflow-tooltip label-class-name="plan"></el-table-column>
            </el-table>
            <el-pagination style="float: right;margin-right: 12px;" :page-size="formData.pageSize" :current-page="formData.pageNum"
                :pager-count="5"
                layout="prev, pager, next,total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" :total="12">
            </el-pagination>
        </main>
    </div>
</template>
<script>
export default {
    name: 'basedSummary',
    data() {
        return {
            formData: {
				offset: 1,
				limit: 6,
				groupCode: 1,
				loginCode: '1',
				regionCode: '',
				cityCode: '',
				projectName: ''
			},
            tableData: [
                {
                    // 项目
                    areaName: '东北区域',
                    branchName: '长春分公司1',
                    projectName: '测试一',
                    architectureArea: 12222,
                    totalHouseholds: 245,
                    residentialHouseholds: 3,
                    residentialHardcover: 4,
                    residentialBlank: 5,
                    residentialChargingArea: 6,
                    businessHouseholds: 7,
                    businessChargingArea: 8,
                    officeHouseholds: 9,
                    officeChargingArea: 10,
                    projectType: 11,
                    totalBuilding: 12,
                    parkingFee: 13,
                    plotRatio: '14%',
                    afforestationRate: '15%',
                    areaCovered: 16,
                    afforestedArea: 17,
                    groundArea: 18,
                    totalBasementArea: 19,
                    abovegroundVehicleParkingSpaceNum: 20,
                    undergroundVehicleParkingSpaceNum: 21,
                    developmentCompany: 22,
                    designCompany: 23,
                    currentIssue: 24,
                    deliveryDate: 25,
                    // 计划
                    inspTotalArea: 26,
                    inspBuildNum: 27,
                    inspResidentialBuildNum: 28,
                    inspCommercialBuildNum: 29,
                    inspOfficeBuildNum: 30,
                    inspTotalHouseholdsNum: 31,
                    inspHardboundHouses: 32,
                    inspRoughcastHouses: 33,
                    inspIndoorArea: 34,
                    inspPublicArea: 35,
                    inspCommercialHouseholds: 36,
                    inspCommercialIndoorArea: 37,
                    inspCommercialPublicArea: 38,
                    inspOfficeHouses: 39,
                    inspOfficeIndoorArea: 40,
                    inspOfficePublicArea: 41,
                    inspBusinessTypeName: 42,
                    startTime: '2019-10-01 00:00:00',
                    endTime: '2019-10-01 00:00:00',
                    inspActualStartDate: '2019-10-01 00:00:00',
                    inspActualEndDate: '2019-10-01 00:00:00',
                    contractDeliveryDate: '2019-10-01 00:00:00',
                    plannedDeliveryDate: '2019-10-01 00:00:00'
                },
                {
                    // 项目
                    areaName: '东北区域',
                    branchName: '长春分公司1',
                    projectName: '测试一',
                    architectureArea: 2341,
                    totalHouseholds: 2,
                    residentialHouseholds: 3,
                    residentialHardcover: 4,
                    residentialBlank: 5,
                    residentialChargingArea: 6,
                    businessHouseholds: 7,
                    businessChargingArea: 8,
                    officeHouseholds: 9,
                    officeChargingArea: 10,
                    projectType: 11,
                    totalBuilding: 12,
                    parkingFee: 13,
                    plotRatio: '14%',
                    afforestationRate: '15%',
                    areaCovered: 16,
                    afforestedArea: 17,
                    groundArea: 18,
                    totalBasementArea: 19,
                    abovegroundVehicleParkingSpaceNum: 20,
                    undergroundVehicleParkingSpaceNum: 21,
                    developmentCompany: 22,
                    designCompany: 23,
                    currentIssue: 24,
                    deliveryDate: 25,
                    // 计划
                    inspTotalArea: 26,
                    inspBuildNum: 27,
                    inspResidentialBuildNum: 28,
                    inspCommercialBuildNum: 29,
                    inspOfficeBuildNum: 30,
                    inspTotalHouseholdsNum: 31,
                    inspHardboundHouses: 32,
                    inspRoughcastHouses: 33,
                    inspIndoorArea: 34,
                    inspPublicArea: 35,
                    inspCommercialHouseholds: 36,
                    inspCommercialIndoorArea: 37,
                    inspCommercialPublicArea: 38,
                    inspOfficeHouses: 39,
                    inspOfficeIndoorArea: 40,
                    inspOfficePublicArea: 41,
                    inspBusinessTypeName: 42,
                    startTime: '2019-10-01 00:00:00',
                    endTime: '2019-10-01 00:00:00',
                    inspActualStartDate: '2019-10-01 00:00:00',
                    inspActualEndDate: '2019-10-01 00:00:00',
                    contractDeliveryDate: '2019-10-01 00:00:00',
                    plannedDeliveryDate: '2019-10-01 00:00:00'
                },
                {
                    // 项目
                    areaName: '东北区域',
                    branchName: '长春分公司1',
                    projectName: '测试一',
                    architectureArea: 1,
                    totalHouseholds: 2,
                    residentialHouseholds: 3,
                    residentialHardcover: 4,
                    residentialBlank: 5,
                    residentialChargingArea: 6,
                    businessHouseholds: 7,
                    businessChargingArea: 8,
                    officeHouseholds: 9,
                    officeChargingArea: 10,
                    projectType: 11,
                    totalBuilding: 12,
                    parkingFee: 13,
                    plotRatio: '14%',
                    afforestationRate: '15%',
                    areaCovered: 16,
                    afforestedArea: 17,
                    groundArea: 18,
                    totalBasementArea: 19,
                    abovegroundVehicleParkingSpaceNum: 20,
                    undergroundVehicleParkingSpaceNum: 21,
                    developmentCompany: 22,
                    designCompany: 23,
                    currentIssue: 24,
                    deliveryDate: 25,
                    // 计划
                    inspTotalArea: 26,
                    inspBuildNum: 27,
                    inspResidentialBuildNum: 28,
                    inspCommercialBuildNum: 29,
                    inspOfficeBuildNum: 30,
                    inspTotalHouseholdsNum: 31,
                    inspHardboundHouses: 32,
                    inspRoughcastHouses: 33,
                    inspIndoorArea: 34,
                    inspPublicArea: 35,
                    inspCommercialHouseholds: 36,
                    inspCommercialIndoorArea: 37,
                    inspCommercialPublicArea: 38,
                    inspOfficeHouses: 39,
                    inspOfficeIndoorArea: 40,
                    inspOfficePublicArea: 41,
                    inspBusinessTypeName: 42,
                    startTime: '2019-10-01 00:00:00',
                    endTime: '2019-10-01 00:00:00',
                    inspActualStartDate: '2019-10-01 00:00:00',
                    inspActualEndDate: '2019-10-01 00:00:00',
                    contractDeliveryDate: '2019-10-01 00:00:00',
                    plannedDeliveryDate: '2019-10-01 00:00:00'
                },
                {
                    // 项目
                    areaName: '东北区域',
                    branchName: '长春分公司14',
                    projectName: '测试一',
                    architectureArea: 1,
                    totalHouseholds: 2,
                    residentialHouseholds: 3,
                    residentialHardcover: 4,
                    residentialBlank: 5,
                    residentialChargingArea: 6,
                    businessHouseholds: 7,
                    businessChargingArea: 8,
                    officeHouseholds: 9,
                    officeChargingArea: 10,
                    projectType: 11,
                    totalBuilding: 12,
                    parkingFee: 13,
                    plotRatio: '14%',
                    afforestationRate: '15%',
                    areaCovered: 16,
                    afforestedArea: 17,
                    groundArea: 18,
                    totalBasementArea: 19,
                    abovegroundVehicleParkingSpaceNum: 20,
                    undergroundVehicleParkingSpaceNum: 21,
                    developmentCompany: 22,
                    designCompany: 23,
                    currentIssue: 24,
                    deliveryDate: 25,
                    // 计划
                    inspTotalArea: 26,
                    inspBuildNum: 27,
                    inspResidentialBuildNum: 28,
                    inspCommercialBuildNum: 29,
                    inspOfficeBuildNum: 30,
                    inspTotalHouseholdsNum: 31,
                    inspHardboundHouses: 32,
                    inspRoughcastHouses: 33,
                    inspIndoorArea: 34,
                    inspPublicArea: 35,
                    inspCommercialHouseholds: 36,
                    inspCommercialIndoorArea: 37,
                    inspCommercialPublicArea: 38,
                    inspOfficeHouses: 39,
                    inspOfficeIndoorArea: 40,
                    inspOfficePublicArea: 41,
                    inspBusinessTypeName: 42,
                    startTime: '2019-10-01 00:00:00',
                    endTime: '2019-10-01 00:00:00',
                    inspActualStartDate: '2019-10-01 00:00:00',
                    inspActualEndDate: '2019-10-01 00:00:00',
                    contractDeliveryDate: '2019-10-01 00:00:00',
                    plannedDeliveryDate: '2019-10-01 00:00:00'
                },
            ],
            oneRow: [],
            oneRowPos: 0,
            tweRow: [],
            tweRowPos: 0,
            threeRow: [],
            threeRowPos: 0,
            fourRow: [],
            fourRowPos: 0,
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        // 获取数据
        getList() {
            for(let i = 0; i < this.tableData.length; i++) {
                if (i === 0) {
                    this.oneRow.push(1)
                    this.oneRowPos = 0
                    this.tweRow.push(1)
                    this.tweRowPos = 0
                    this.threeRow.push(1)
                    this.threeRowPos = 0
                    this.fourRow.push(1)
                    this.fourRowPos = 0
                }else {
                    if (this.tableData[i].areaName === this.tableData[i-1].areaName) {
                        this.oneRow[this.oneRowPos] += 1
                        this.oneRow.push(0)
                    }else {
                        this.oneRow.push(1)
                        this.oneRowPos = i
                    }
                    if (this.tableData[i].areaName === this.tableData[i-1].areaName && this.tableData[i].branchName === this.tableData[i-1].branchName) {
                        this.tweRow[this.tweRowPos] += 1
                        this.tweRow.push(0)
                    }else {
                        this.tweRow.push(1)
                        this.tweRowPos = i
                    }
                    if (this.tableData[i].areaName === this.tableData[i-1].areaName && this.tableData[i].branchName === this.tableData[i-1].branchName && this.tableData[i].projectName === this.tableData[i-1].projectName) {
                        this.threeRow[this.threeRowPos] += 1
                        this.threeRow.push(0)
                    }else {
                        this.threeRow.push(1)
                        this.threeRowPos = i
                    }
                    if (this.tableData[i].areaName === this.tableData[i-1].areaName && this.tableData[i].branchName === this.tableData[i-1].branchName && this.tableData[i].projectName === this.tableData[i-1].projectName && this.tableData[i].currentIssue === this.tableData[i-1].currentIssue) {
                        this.fourRow[this.fourRowPos] += 1
                        this.fourRow.push(0)
                    }else {
                        this.fourRow.push(1)
                        this.fourRowPos = i
                    }
                }
            }
        },
        // 合并单元格
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                const _row = this.oneRow[rowIndex]
               // console.log(this.oneRow)
                console.log(_row)


                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
            if (columnIndex === 1) {
                const _row = this.tweRow[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
            if (columnIndex === 2) {
                const _row = this.threeRow[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
            if (columnIndex > 2 && columnIndex < 29) {
                const _row = this.fourRow[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        },
        // 设置总计
		getSummaries(param) {
			const { columns, data } = param;
			const sums = [];
			columns.forEach((column, index) => {
				if (index === 0) {
					sums[index] = '合计';
					return;
				}
				const values = data.map(item => Number(item[column.property]));
				if (!values.every(value => isNaN(value))) {
					sums[index] = values.reduce((prev, curr) => {
						const value = Number(curr);
						if (!isNaN(value)) {
							return prev + curr;
						} else {
							return prev;
						}
					}, 0);
					sums[index] += ' 元';
				} else {
					sums[index] = '';
				}
			});

			return sums;
        },
        /** 分页 */
		handleSizeChange(val) {
		},
		/** 分页 */
		handleCurrentChange(val) {
		},
    }
}
</script>
<style lang="scss" scoped>
.basedSummary{
    main{
        padding: 20px;
        background: #f2f2f2;
        border-radius: 10px;
        margin-top: 10px;
        .el-table{

        }
    }
}
.basedSummary .el-table{
    
}
</style>
<style lang="scss">
.basedSummary{
    main{
        .el-table{
            .project{
                background: #facd91;
            }
            .plan{
                background: #81d3f8;
            }
        }
    }
}
</style>

