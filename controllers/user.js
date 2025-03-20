exports.getHome=(req,res,next)=>{
 res.render('index');
}

exports.postHome=(req,res,next)=>{
    const dob=req.body.dob;
    const dobs=new Date(dob);
    const avgHumnlife=70;
    const date=new Date();
    // const dates=date.toISOString().split('T')[0];
    let dif=date.getTime()-dobs.getTime();
    // console.log(dates);
    dif=dif/(1000*60*60*24*365.25);
    dif=Math.floor(dif);
    let total_life_year=avgHumnlife-dif;
    if(total_life_year>0){
        console.log(total_life_year);
        let todays=total_life_year*365.25;
        
        let hour=todays-parseInt(todays);
        hour=hour*24;
        console.log(todays,"days");
        todays=parseInt(todays);
        res.render('result',{remaingdays:todays,hour:hour});
    }
    res.render('result',{remaingdays:"0",hour:"0"});
}