exports.getHome = (req, res, next) => {
    res.render('index');
}

exports.postHome = (req, res, next) => {
    const dob = req.body.dob;
    const dobs = new Date(dob);
    const avgHumnlife = 70;
    const date = new Date();
    let dif = date - dobs;
    console.log("yer", dif);
    dif = dif / (1000 * 60 * 60 * 24 * 365.25);
    let total_life_year = (avgHumnlife) - (dif);
    if (total_life_year > 0) {
        let complet_year = Math.floor(total_life_year);
        let desimalPart = total_life_year - complet_year;
        let extra_days = desimalPart * 365.25;
        let extra_decimal = extra_days - Math.floor(extra_days);
        let hour = Math.floor(extra_decimal * 24);
        complet_year = Math.floor(complet_year * 365.25) + Math.floor(extra_days);
        res.render('result', { remaingdays: complet_year, hour: hour });
    }
    else {
        res.render('result', { remaingdays: "0", hour: "0" });
    }

}