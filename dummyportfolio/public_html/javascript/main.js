function getData(data) {
    var name = data['name'];
    var dept = data['dept'];
    var imgsrc = data['img']
    var field = data['field'];
    var desc = data['desc'];
    var social = data['social'];
    var exp = data['experience'];
    var proj = data['projects'];
    var course = data['courses'];
    var educ = data['education'];
    var skill = data['skills'];
    about(name,dept,field,desc,imgsrc);
    experience(exp);
    projects(proj);
    courses(course);
    sociallinks(social);
    education(educ);
    skills(skill);
}

function about(name,dept,field,desc,imgsrc){
    var img = document.querySelector("#about #image");
    var imgdata = document.createElement("img");
    imgdata.setAttribute("id","student")
    imgdata.src = imgsrc;
    img.appendChild(imgdata);
    document.querySelector("#name").innerHTML = name + " | " + dept;
    document.querySelector("#field").innerHTML = field;
    document.querySelector("#desc").innerHTML = desc;
}

function  experience(exp){
    var newexp = document.querySelector("#experiences");
    var expdiv;
    for(var i in exp){
        expdiv = document.createElement("div");
        expdiv.setAttribute("id","exp-" + i);
        datedata =  "<div id ='date'>" + exp[i]["date"] + "</div>";
        jobdata =  "<div id ='job'>" + exp[i]["job"] + "</div>";
        company =  "<div id ='company'>" + exp[i]["company"] + "</div>";
        jobdesc =  "<div id ='jobdesc'>" + exp[i]["job desc"] + "</div>";
        data = datedata.concat(jobdata,company,jobdesc);
        expdiv.innerHTML += data;
        newexp.appendChild(expdiv);
    }
}

function  projects(proj){
    var newproject = document.querySelector("#projects");
    var projectdiv;
    for(var i in proj){
        projectdiv = document.createElement("div");
        projectdiv.setAttribute("id","project-" + i);
        imgdata =  "<div id = 'projimg'><img src = " + proj[i]["img src"] + "></div>";
        projtitle = "<div id = 'projtitle'>" + proj[i]["project title"] + "</div>";
        projdesc = "<div id = 'projdesc'>" + proj[i]["project desc"] + "</div>";
        data = imgdata.concat(projtitle,projdesc);
        projectdiv.innerHTML += data;
        newproject.appendChild(projectdiv);
    }
}

function courses(course){
    var newcourse = document.querySelector("#courses");
    var coursediv;
    for(var i in course){
        
        coursediv = document.createElement("div");
        coursediv.setAttribute("id","course-" + i);
        imgdata ="<div id ='icon'><i class = 'fas fa-" + course[i]["img"] + " fa-5x'></i></div>";
        coursetitle = "<div id ='title'>" + course[i]["course"] + "</div>";
        platform = "<div id ='platform'>" + course[i]["platform"] + "</div>";
        certificate = "<div id = 'cert'><a href = '#'>CERTIFICATE</a></div?"
        data = imgdata.concat(coursetitle,platform,certificate);
        coursediv.innerHTML += data;
        newcourse.appendChild(coursediv);
    }
}

function sociallinks(social){
    var newsocial = document.querySelector("#social");
    var title = "<h6 id = 'foottitle-2'>Let's Connect</h6>";
    newsocial.innerHTML = title;
    var socialdiv;
    for(var i in social){
        
        socialdiv = document.createElement("div");
        socialdiv.setAttribute("id","social-" + i);
        data = "<div id = '" + social[i]['name'] + "'><a href = '" + social[i]['link'] + "'><i class = 'fab fa-" + social[i]['icon'] + "'></i>FOLLOW</a></div>"
        socialdiv.innerHTML += data;
        newsocial.appendChild(socialdiv);
    }
}

function education(educ){
    var neweduc = document.querySelector("#education");
    for(var i in educ){
        var educdiv = '';
        educdiv = document.createElement("div");
        educdiv.setAttribute("id","educ-" + i);
        for(var j in educ[i]){
            data = "<div id = '"+ j + "'>" + educ[i][j] + "</div>";
            console.log(data);
            educdiv.innerHTML += data;
        } 
        neweduc.appendChild(educdiv);
    }
    
}

function skills(skill){
    var newskill = document.querySelector("#skills");
    var skilldiv;
    for(var i in skill){
        skilldiv = document.createElement("div");
        skilldiv.setAttribute("id","skill-" + i);
        data = "<div id = '"+ i +"'>" + skill[i] + "</div>";
        skilldiv.innerHTML += data;
        newskill.appendChild(skilldiv);
    }
}
