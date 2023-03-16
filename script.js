(
    function generateTable()
    {
        var info=new Array();
        info.push(new Array("Name","Age","DOB","Email","Company"));
        info.push(new Array("Radhika Narang",21,"25-04-2001","narangradhika2001@gmail.com","Gemini Solutions"));
        info.push(new Array("Radhika Narang",21,"25-04-2001","narangradhika2001@gmail.com","Gemini Solutions"));
        info.push(new Array("Radhika Narang",21,"25-04-2001","narangradhika2001@gmail.com","Gemini Solutions"));
        info.push(new Array("Radhika Narang",21,"25-04-2001","narangradhika2001@gmail.com","Gemini Solutions"));

        
        const table = document.createElement("TABLE");
        const tableBody = document.createElement("TBODY");
        
        table.setAttribute("border", "2");
        table.style.margin='auto';
        table.style.textAlign='center';
        table.style.padding="20%";
        
        for (let i = 0; i < 5; i++)
        {
            const row = document.createElement("TR");
        
            for (let j = 0; j < 5; j++) {
                if(i==0)
                {
                    const col = document.createElement("TH");
                    const col1 = document.createTextNode(info[i][j]);
                    col.appendChild(col1);
                    row.appendChild(col);
                }
                else
                {
                    const col = document.createElement("TD");
                    const col1 = document.createTextNode(info[i][j]);
                    col.appendChild(col1);
                    row.appendChild(col);
                }
            }
        
            tableBody.appendChild(row);
        }
    
        table.appendChild(tableBody);
        document.body.appendChild(table);

        
       
    }
)();