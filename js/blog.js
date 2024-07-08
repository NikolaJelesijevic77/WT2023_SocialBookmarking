const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching data ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        
        let tmpString = "";
        var myDataContainer = document.getElementById('blogCards');
        
        data?.blogovi.forEach((blog) => {
            tmpString += `
                <div class="col mb-4">
                    <div class="card card-custom h-100">
                        <div class="card-header card-header-custom">
                            Id: ${blog.id}
                        </div>
                        <div class="card-body card-body-custom">
                            <h4 class="card-title card-title-custom"><b>Naslov:</b> ${blog.naslov}</h4>
                            <p class="card-text card-text-custom"><b>Opis:</b> ${blog.sadrzaj}</p>
                            <p class="card-text card-text-custom"><b>Autor:</b> ${blog.autor}</p>
                            <h6 class="card-title"><b>Datum:</b> ${blog.datum}</h6>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-custom mt-3">Ceo blog!</button>
                            </div>
                        </div>
                        <div class="card-footer card-footer-custom">
                            <small>${blog.slug}</small>
                        </div>
                    </div>
                </div>`;
        });

        myDataContainer.innerHTML = tmpString;
        
    } catch (error) {
        console.error(error.message);
    }
}
fetchData("../db/blog.json")