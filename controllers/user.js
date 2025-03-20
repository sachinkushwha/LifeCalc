exports.getHome=(req,res,next)=>{
 res.render('index');
}

exports.postHome=(req,res,next)=>{
    const dob=req.body.dob;
    const dobs=new Date(dob);
    const avgHumnlife=70;
    const date=new Date();
    let dif=date.getTime()-dobs.getTime();
    dif=dif/(1000*60*60*24*365.25);
    dif=Math.floor(dif);
    let total_life_year=avgHumnlife-dif;
    if(total_life_year>0){
        let todays=total_life_year*365.25;
        let hour=todays-parseInt(todays);
        hour=hour*24;
        todays=parseInt(todays);
        res.render('result',{remaingdays:todays,hour:hour});
    }
    else{
        res.render('result',{remaingdays:"0",hour:"0"});
    }
    
}