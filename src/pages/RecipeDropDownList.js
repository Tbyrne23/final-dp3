import { useMemo, useState } from "react";  
import { DropDownList } from "@progress/kendo-react-dropdowns";  
  
// Dropdown categories  
const categories = ["Blank", "Fav songs",];  
  
  
// Results data filtered using categories  
const data = [  
  {  
    id: 1,  
    label: "Song 1",  
    type: "Fav songs",  
  },  
  {  
    id: 2,  
    label: "Song 2",  
    type: "Fav songs",  
  },  
  {  
    id: 3,  
    label: "Song 3",  
    type: "Fav songs",  
  },  
  
 
];  
  
export const RecipeDropDownList = () => {  
  // Store currently selected category  
  const [category, setCategory] = useState("Fav Songs");  
  
  // Memoized results. Will re-evaluate any time selected  
  // category changes  
  const filteredData = useMemo(() => {  
    if (!category || category === "") return data;  
  
    return data.filter(item => item.type === category);  
}, [category]);  
  

  return (
    <section className="k-my-8">
      <form className="k-form k-mb-4">
        <label className="k-label k-mb-3">Favorites</label>
        <DropDownList data={categories} onChange={e => setCategory(e.value)} />
      </form>

      <section className="k-listgroup">
        <ul>
          {filteredData.map(item => {
            return (
              <li key={item.id} className="k-listgroup-item">
                {item.label}
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};