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
    let yearofday=avgHumnlife-dif;
    console.log(yearofday);
    let todays=yearofday*365.25;
    
    let hour=todays-parseInt(todays);
    hour=hour*24;
    console.log(todays,"days");
    todays=parseInt(todays);
    res.render('result',{remaingdays:todays,hour:hour});
}