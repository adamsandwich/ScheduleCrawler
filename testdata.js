
 
<script language="JavaScript" type="text/JavaScript" src="/eams/static/scripts/course/TaskActivity.js?v3.21"></script>
<script language="JavaScript">
	function fillTable(table,weeks,units,tableIndex){
	
   	   for(var i=0;i<weeks;i++){
	 	    for(var j=0;j<units-1;j++){
	 	        var index =units*i+j;
	 	        var preTd=jQuery("#TD"+index+"_"+tableIndex);
	 	        var nextTd=jQuery("#TD"+(index+1)+"_"+tableIndex);
	 	        while(table.marshalContents[index]!=null&&table.marshalContents[index+1]!=null&&table.marshalContents[index]==table.marshalContents[index+1]){
	 	            nextTd.remove();
	 	            var spanNumber = 1;
	 	            if(preTd.prop("rowSpan")) spanNumber = new Number(preTd.prop("rowSpan"))
	 	            spanNumber++;
	 	            preTd.prop("rowSpan",spanNumber);
	 	            j++;
	 	            if(j>=units-1){
	 	                break;
	 	            }
	 	            index=index+1;
	 	            nextTd=jQuery("#TD"+(index+1)+"_"+tableIndex);
	 	        }
	 	    }
 	    }
 	    
 	   		for(var k = 0; k < table.unitCounts; k++){
			var td=document.getElementById("TD" + k + "_" + tableIndex);
			if(td != null && table.marshalContents[k] != null) { 
				td.innerHTML = table.marshalContents[k];
				td.style.backgroundColor="#94aef3";
				td.className = "infoTitle";
				
				// 查找冲突 table.activities是什么，可以查看TaskActivity.js和courseTableContent_script.ftl
				var activitiesInCell = table.activities[k];
				if(detectCollisionInCell(activitiesInCell)) {
					td.style.backgroundColor="red";
				}
				td.className="infoTitle";
				td.title=table.marshalContents[k].replace(/<br>/g,";");
			}
		}
   	}
function detectCollisionInCell(activitiesInCell) {
	if(activitiesInCell.length <=1)
		return false;
	//单元格的课程集合[courseId(seqNo)->true]
	var cellCourseIds=new Object();
	var mergedValidWeeks = activitiesInCell[0].vaildWeeks.split("");
	//登记第一个课程
	cellCourseIds[ activitiesInCell[0].courseName]=true;
	for(var z = 1; z < activitiesInCell.length; z++) {		
		var detectCollision = false;
		var tValidWeeks = activitiesInCell[z].vaildWeeks.split("");
		if(mergedValidWeeks.length != tValidWeeks.length) {
			alert('mergedValidWeeks.length != tValidWeeks.length');
			return;
		}
		for(var x = 0; x < mergedValidWeeks.length; x++) {	//53代表53周
			var m = new Number(mergedValidWeeks[x]);
			var t = new Number(tValidWeeks[x]);
			if(m + t <= 1) {
				mergedValidWeeks[x] = m + t;
			}
			else {
				//如果已经是登记过的，则不算冲突
			    if(!cellCourseIds[activitiesInCell[z].courseName]){
  					return true;	//发现冲突
  				}
  			}
  		}
  		//登记该课程
  		cellCourseIds[activitiesInCell[z].courseName]=true;
	}
	return false;
}
</script>
   		<pre>课表格式说明：教师姓名 课程名称(序号) (第n周-第m周,教室)</pre>
		<table width="100%" id="manualArrangeCourseTable" align="center" class="gridtable"  style="text-align:center">
			<thead>
			<tr>
		    	<th style="background-color:#DEEDF7;" height="10px" width="80px">节次/周次</td>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期日</font>
				</th>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期一</font>
				</th>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期二</font>
				</th>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期三</font>
				</th>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期四</font>
				</th>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期五</font>
				</th>
		    	<th style="background-color:#DEEDF7;">
		        	<font size="2px">星期六</font>
				</th>
			</tr>
			</thead>
			<tr>
			    <td style="background-color:yellow">
		    		<font size="2px"> 上1[08:00-]</font>
				</td>
		   		<td id="TD84_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD0_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD14_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD28_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD42_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD56_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD70_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:yellow">
		    		<font size="2px"> 上2        </font>
				</td>
		   		<td id="TD85_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD1_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD15_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD29_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD43_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD57_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD71_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:green">
		    		<font size="2px"> 上3[09:45-]</font>
				</td>
		   		<td id="TD86_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD2_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD16_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD30_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD44_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD58_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD72_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:green">
		    		<font size="2px"> 上4</font>
				</td>
		   		<td id="TD87_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD3_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD17_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD31_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD45_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD59_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD73_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:red">
		    		<font size="2px"> #5</font>
				</td>
		   		<td id="TD88_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD4_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD18_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD32_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD46_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD60_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD74_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:yellow">
		    		<font size="2px"> 下6[13:00-]</font>
				</td>
		   		<td id="TD89_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD5_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD19_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD33_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD47_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD61_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD75_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:yellow">
		    		<font size="2px"> 下7</font>
				</td>
		   		<td id="TD90_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD6_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD20_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD34_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD48_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD62_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD76_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:green">
		    		<font size="2px"> 下8[14:45-]</font>
				</td>
		   		<td id="TD91_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD7_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD21_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD35_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD49_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD63_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD77_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:green">
		    		<font size="2px"> 下9</font>
				</td>
		   		<td id="TD92_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD8_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD22_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD36_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD50_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD64_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD78_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:red">
		    		<font size="2px"> #10</font>
				</td>
		   		<td id="TD93_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD9_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD23_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD37_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD51_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD65_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD79_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:yellow">
		    		<font size="2px"> 晚11[18:00]</font>
				</td>
		   		<td id="TD94_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD10_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD24_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD38_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD52_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD66_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD80_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:yellow">
		    		<font size="2px"> 晚12</font>
				</td>
		   		<td id="TD95_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD11_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD25_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD39_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD53_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD67_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD81_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:green">
		    		<font size="2px"> 晚13[19:40]</font>
				</td>
		   		<td id="TD96_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD12_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD26_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD40_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD54_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD68_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD82_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
			<tr>
			    <td style="background-color:green">
		    		<font size="2px"> 晚14</font>
				</td>
		   		<td id="TD97_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD13_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD27_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD41_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD55_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD69_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
		   		<td id="TD83_0"  style="backGround-Color:#ffffff;font-size:12px"></td>
			</tr>
		</table> 
<script language="JavaScript">
	// function CourseTable in TaskActivity.js
	var language = "zh";
	var table0 = new CourseTable(2017,98);
	var unitCount = 14;
	var index=0;
	var activity=null;
		var teachers = [{id:11343,name:"李大志",lab:false}];
		var actTeachers = [{id:11343,name:"李大志",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48285(080931101931.02)","网络与通信(080931101931.02)","1614","奉贤3教楼309","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =0*unitCount+2;
			table0.activities[index][table0.activities[index].length]=activity;
			index =0*unitCount+3;
			table0.activities[index][table0.activities[index].length]=activity;
			index =0*unitCount+4;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:1166270,name:"刘建华",lab:false}];
		var actTeachers = [{id:1166270,name:"刘建华",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48299(080931102071.01)","网络操作系统实践(080931102071.01)","1814","奉贤物理楼3楼","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =4*unitCount+5;
			table0.activities[index][table0.activities[index].length]=activity;
			index =4*unitCount+6;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:11160,name:"王玉善",lab:false}];
		var actTeachers = [{id:11160,name:"王玉善",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48362(080931102701.02)","数据库课程实践(080931102701.02)","2108","奉贤综合实验楼415北","01111111111111101000000000000000000000000000000000000",null,null,assistantName,"");
			index =0*unitCount+5;
			table0.activities[index][table0.activities[index].length]=activity;
			index =0*unitCount+6;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:11160,name:"王玉善",lab:false}];
		var actTeachers = [{id:11160,name:"王玉善",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48362(080931102701.02)","数据库课程实践(080931102701.02)","1631","奉贤3教楼413","01111111100000000000000000000000000000000000000000000",null,null,assistantName,"");
			index =0*unitCount+0;
			table0.activities[index][table0.activities[index].length]=activity;
			index =0*unitCount+1;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:12712,name:"李鲁群",lab:false}];
		var actTeachers = [{id:12712,name:"李鲁群",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48933(080931108411.01)","Java语言课程实践(080931108411.01)","1947","奉贤5教楼D-D10","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =4*unitCount+7;
			table0.activities[index][table0.activities[index].length]=activity;
			index =4*unitCount+8;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:12712,name:"李鲁群",lab:false}];
		var actTeachers = [{id:12712,name:"李鲁群",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48933(080931108411.01)","Java语言课程实践(080931108411.01)","1947","奉贤5教楼D-D10","01010101010101010000000000000000000000000000000000000",null,null,assistantName,"");
			index =3*unitCount+7;
			table0.activities[index][table0.activities[index].length]=activity;
			index =3*unitCount+8;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:11613,name:"徐美玲",lab:false}];
		var actTeachers = [{id:11613,name:"徐美玲",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"23536(001031100151.14)","职业发展与就业指导(001031100151.14)","1402","奉贤3教楼505","01111111000000000000000000000000000000000000000000000",null,null,assistantName,"");
			index =2*unitCount+0;
			table0.activities[index][table0.activities[index].length]=activity;
			index =2*unitCount+1;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:1110749,name:"EDWIN",lab:false}];
		var actTeachers = [{id:1110749,name:"EDWIN",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"23960(001031104391.74)","大学英语口语(001031104391.74)","1843","奉贤5教楼A118","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =2*unitCount+2;
			table0.activities[index][table0.activities[index].length]=activity;
			index =2*unitCount+3;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:10883,name:"沈涤",lab:false}];
		var actTeachers = [{id:10883,name:"沈涤",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48774(080931106821.01)","多媒体技术(080931106821.01)","1405","奉贤3教楼512","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =3*unitCount+2;
			table0.activities[index][table0.activities[index].length]=activity;
			index =3*unitCount+3;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:11157,name:"王旭卿",lab:false}];
		var actTeachers = [{id:11157,name:"王旭卿",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48105(080931100131.02)","专业外语(080931100131.02)","1611","奉贤3教楼302","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =1*unitCount+0;
			table0.activities[index][table0.activities[index].length]=activity;
			index =1*unitCount+1;
			table0.activities[index][table0.activities[index].length]=activity;
		var teachers = [{id:10859,name:"蒋培",lab:false}];
		var actTeachers = [{id:10859,name:"蒋培",lab:false}];
		var assistant = _.filter(actTeachers, function(actTeacher) {
			return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
		});
		var assistantName = "";
		if (assistant.length > 0) {
			assistantName = assistant[0].name;
			actTeachers = _.reject(actTeachers, function(actTeacher) {
				return _.where(assistant, {id:actTeacher.id}).length > 0;
			});
		}
		var actTeacherId = [];
		var actTeacherName = [];
		for (var i = 0; i < actTeachers.length; i++) {
			actTeacherId.push(actTeachers[i].id);
			actTeacherName.push(actTeachers[i].name);
		}
			activity = new TaskActivity(actTeacherId.join(','),actTeacherName.join(','),"48897(080931108051.02)","Web程序设计(080931108051.02)","1944","奉贤5教楼D-D03","01111111111111111000000000000000000000000000000000000",null,null,assistantName,"");
			index =1*unitCount+7;
			table0.activities[index][table0.activities[index].length]=activity;
			index =1*unitCount+8;
			table0.activities[index][table0.activities[index].length]=activity;
	table0.marshalTable(2,1,1);
	fillTable(table0,7,14,0);
</script>   		    <br/>
 
<strong>课程列表:</strong>
<div class="grid">


<table id="grid12042826911" class="gridtable">
<thead class="gridhead">


<tr>
<th  width="5%" >序号</th>
<th  width="15%" >课程序号</th>
<th  width="10%" >课程代码</th>
<th  width="15%" >课程名称</th>
<th  width="10%" >教学班课程类别</th>
<th  width="15%" >培养方案课程类别</th>
<th  width="15%" >开课院系</th>
<th  width="15%" >教师</th>
<th  width="5%" >学分</th>
<th  width="10%" >备注</th>
<th  width="10%" >操作</th>
</tr>

</thead>

<tbody id="grid12042826911_data"><tr>		<td>1</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=70165" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">001031100151.14</a>
</td><td>001031100151</td><td>职业发展与就业指导</td>		<td>公必</td>
<td>				公必
</td><td>信息与机电工程学院</td><td>徐美玲</td><td>1</td><td>      			
      			<br/>
      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=70165" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=70165" target="_blank">课程小节</a>
</td></tr><tr>		<td>2</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=65529" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">001031104391.74</a>
</td><td>001031104391</td><td>大学英语口语</td>		<td>公必</td>
<td>				公必
</td><td>外国语学院</td><td>EDWIN</td><td>0</td><td>      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=65529" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=65529" target="_blank">课程小节</a>
</td></tr><tr>		<td>3</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=68393" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931100131.02</a>
</td><td>080931100131</td><td>专业外语</td>		<td>任选</td>
<td>				任选
</td><td>信息与机电工程学院</td><td>王旭卿</td><td>2</td><td>      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=68393" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=68393" target="_blank">课程小节</a>
</td></tr><tr>		<td>4</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=68272" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931101931.02</a>
</td><td>080931101931</td><td>网络与通信</td>		<td>专必</td>
<td>				专必
</td><td>信息与机电工程学院</td><td>李大志</td><td>3</td><td>      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=68272" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=68272" target="_blank">课程小节</a>
</td></tr><tr>		<td>5</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=68306" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931102071.01</a>
</td><td>080931102071</td><td>网络操作系统实践</td>		<td>实践</td>
<td>				实践
</td><td>信息与机电工程学院</td><td>刘建华</td><td>1.5</td><td>      			
      			<br/>
      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=68306" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=68306" target="_blank">课程小节</a>
</td></tr><tr>		<td>6</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=71721" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931102701.02</a>
</td><td>080931102701</td><td>数据库课程实践</td>		<td>实践</td>
<td>				实践
</td><td>信息与机电工程学院</td><td>王玉善</td><td>1.5</td><td>      			
      			<br/>
      			
      			<br/>
      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=71721" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=71721" target="_blank">课程小节</a>
</td></tr><tr>		<td>7</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=68170" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931106821.01</a>
</td><td>080931106821</td><td>多媒体技术</td>		<td>限选</td>
<td>				限选
</td><td>信息与机电工程学院</td><td>沈涤</td><td>3</td><td>      			
      			<br/>
      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=68170" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=68170" target="_blank">课程小节</a>
</td></tr><tr>		<td>8</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=68169" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931108051.02</a>
</td><td>080931108051</td><td>Web程序设计</td>		<td>限选</td>
<td>				限选
</td><td>信息与机电工程学院</td><td>蒋培</td><td>3</td><td>      			
      			<br/>
      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=68169" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=68169" target="_blank">课程小节</a>
</td></tr><tr>		<td>9</td>
<td>		<a href="/eams/courseTableForStd!taskTable.action?lesson.id=68472" onclick="return bg.Go(this,null)" title="点击显示单个教学任务具体安排">080931108411.01</a>
</td><td>080931108411</td><td>Java语言课程实践</td>		<td>实践</td>
<td>				实践
</td><td>信息与机电工程学院</td><td>李鲁群</td><td>1.5</td><td>      			
      			<br/>
      			
</td><td>			<a href="/eams/courseTableForStd!teachPlanInfo.action?lesson.id=68472" target="_blank">授课计划</a>
			<a href="/eams/courseTableForStd!courseSummaryInfo.action?lesson.id=68472" target="_blank">课程小节</a>
</td></tr></tbody>
</table>
</div>
<script type="text/javascript">
  var clearCheckbox_grid12042826911 = function() {
    jQuery("#grid12042826911").find(".box:checkbox").removeProp("checked");
    jQuery("#grid12042826911").find(".gridselect-top :checkbox").removeProp("checked");
    return true;
  }
  
  page_grid12042826911 = bg.page("/eams/courseTableForStd!courseTable.action","");
  {
    var _paramstring = 'ignoreHead=1&setting.kind=std&startWeek=1&semester.id=102&ids=138276';
    var _params = _paramstring.split('&');
    for (var i = 0; i < _params.length; i++) {
      _params[i] = decodeURIComponent(_params[i]);
    }
    _paramstring = _params.join('&');
    page_grid12042826911.target("",'grid12042826911').action("/eams/courseTableForStd!courseTable.action").addParams(_paramstring).orderBy("null");
  }
  bg.ui.grid.init('grid12042826911',page_grid12042826911);
</script>
 	 <B style="color:red;">注：若培养方案课程类别与教学班课程类别不一致，成绩库中的课程类别以培养方案课程类别为准；若选修课程不在培养方案中，成绩库中的课程类别以教学班课程类别为准！</B>
   		    <br/>
 

<strong>坐班答疑:</strong>
<div class="grid">


<table id="grid12042826912" class="gridtable">
<thead class="gridhead">


<tr>
<th  width="10%" >序号</th>
<th  width="20%" >课程序号</th>
<th  width="20%" >课程名称</th>
<th  width="20%" >教学班</th>
<th  width="10%" >学分</th>
<th  width="20%" >答疑安排</th>
</tr>

</thead>

<tbody id="grid12042826912_data"><tr>		<td>1</td>
<td>001031100151.14</td><td>职业发展与就业指导</td><td>班级:2015年秋季计算机科学与技术本科1班 2015年秋季计算机科学与技术本科2班</td><td>1</td><td>	  星期三
	  10:00 -  10:45
	  [1-8]
	  奉贤信机楼103
</td>	 
</tr></tbody>
</table>
</div>
<script type="text/javascript">
  var clearCheckbox_grid12042826912 = function() {
    jQuery("#grid12042826912").find(".box:checkbox").removeProp("checked");
    jQuery("#grid12042826912").find(".gridselect-top :checkbox").removeProp("checked");
    return true;
  }
  
  page_grid12042826912 = bg.page("/eams/courseTableForStd!courseTable.action","");
  {
    var _paramstring = 'ignoreHead=1&setting.kind=std&startWeek=1&semester.id=102&ids=138276';
    var _params = _paramstring.split('&');
    for (var i = 0; i < _params.length; i++) {
      _params[i] = decodeURIComponent(_params[i]);
    }
    _paramstring = _params.join('&');
    page_grid12042826912.target("",'grid12042826912').action("/eams/courseTableForStd!courseTable.action").addParams(_paramstring).orderBy("null");
  }
  bg.ui.grid.init('grid12042826912',page_grid12042826912);
</script>
   		    <br/>
 
<strong>自习辅导:</strong>
<div class="grid">


<table id="grid12042826913" class="gridtable">
<thead class="gridhead">


<tr>
<th  width="10%" >序号</th>
<th  width="20%" >课程序号</th>
<th  width="20%" >课程名称</th>
<th  width="20%" >教学班</th>
<th  width="10%" >学分</th>
<th  width="20%" >答疑安排</th>
</tr>

</thead>

<tbody id="grid12042826913_data"><tr>		<td>1</td>
<td>001031100151.14</td><td>职业发展与就业指导</td><td>班级:2015年秋季计算机科学与技术本科1班 2015年秋季计算机科学与技术本科2班</td><td>1</td>	  <td>星期三
	  13:00 -  13:45
	  [2,5,8]
	  奉贤信机楼103
</td>	 
</tr></tbody>
</table>
</div>
<script type="text/javascript">
  var clearCheckbox_grid12042826913 = function() {
    jQuery("#grid12042826913").find(".box:checkbox").removeProp("checked");
    jQuery("#grid12042826913").find(".gridselect-top :checkbox").removeProp("checked");
    return true;
  }
  
  page_grid12042826913 = bg.page("/eams/courseTableForStd!courseTable.action","");
  {
    var _paramstring = 'ignoreHead=1&setting.kind=std&startWeek=1&semester.id=102&ids=138276';
    var _params = _paramstring.split('&');
    for (var i = 0; i < _params.length; i++) {
      _params[i] = decodeURIComponent(_params[i]);
    }
    _paramstring = _params.join('&');
    page_grid12042826913.target("",'grid12042826913').action("/eams/courseTableForStd!courseTable.action").addParams(_paramstring).orderBy("null");
  }
  bg.ui.grid.init('grid12042826913',page_grid12042826913);
</script>
   		<br>
   		    
   		<br>
