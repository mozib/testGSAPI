function testGS() {
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=wXoJxR47ttEAJ_V9D5avZODAHXxWt_ezSbeCShdLrTCCA-do32gkH08NotrrDayLWDckmeVo2gHtD4zdkuFEBtrsTADvHoiBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHFsFOP4D1zL-G22gmcaA68z2TDkYM7oqLb-mpqy8f_bBBkYNnEXQRBfY4o6dsqrzeR2K8DvKaFIDLN9CFSZhZOrXKeZ-rHwz9z9Jw9Md8uu&lib=Mdqx8GqWyR4ROcLMVTKp4QPd87nXotV8J";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}
document.getElementById("btn").addEventListener("click", testGS);