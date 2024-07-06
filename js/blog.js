const fetchData = async (url) =>
    {
        try 
        {
            const response = await fetch(url);
            if(!response.ok)
            {
                throw new Error('Error fetching data ' + response.status);
            }
            const data = await response.json();
            console.log(data);
            let tmpString="";
            var myDataContainer = document.getElementById('blogCards');
            let x = data?.blogovi.map((blog) => `
            <div class="col col-12 col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <div class="card-header">
                        Naslov:${blog.naslov}
                        Autor: ${blog.autor}
                    </div>
                    <div class="card-body">
                        <p class="card-text">Datum:${blog.datum} </p>
                        <h5 class="card-title">Id: ${blog.id}</h5>
                        <p class="card-text"> Opis: ${blog.sadrzaj}</p>
                    </div>
                    <div class="card-footer">
                        <p class="card-text"> Slug: ${blog.slug}</p>
                    </div>
                </div>
            </div>`)
            tmpString += x;
            myDataContainer.innerHTML = tmpString;
        } 
        catch (error) 
        {
            console.error(error.message);
        }
        
    }
fetchData("../db/blog.json");
