// CategoryFilter.jsx
import { useFilterProvider } from '../../contexts/FilterContext';

export const CategoryFilter = () => {
  const { CheckBoxFilter } = useFilterProvider();
  
  const categories = [
    { id: 'women', label: "Women's Clothing", state: CheckBoxFilter.women.womenFilterCategory, setter: CheckBoxFilter.women.setWomenCategory },
    { id: 'men', label: "Men's Clothing", state: CheckBoxFilter.men.menFilterCategory, setter: CheckBoxFilter.men.setMenCategory },
    { id: 'jewelery', label: "Jewelry", state: CheckBoxFilter.jewelery.jeweleryFilterCategory, setter: CheckBoxFilter.jewelery.setJewleryCategory },
    { id: 'electronics', label: "Electronics", state: CheckBoxFilter.eletronic.eletronicFilterCategory, setter: CheckBoxFilter.eletronic.setEletronicCategory }
  ];

  return (
    <div className="dark:text-white">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Categorias</h3>
      <div className="space-y-3">
        {categories.map(category => (
          <label key={category.id} className="flex items-center group cursor-pointer">
            <input 
              type="checkbox" 
              checked={category.state}
              onChange={() => category.setter(!category.state)}
              className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary transition duration-150 ease-in-out" 
            />
            <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              {category.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
