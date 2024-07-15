import { useFilterProvider } from '../../contexts/FilterContext';

export const CategoryFilter = () => {
  const { CheckBoxFilter } = useFilterProvider();

  function toggleFilter(filter) {
    switch(filter) {
      case 'women':
        CheckBoxFilter.women.setWomenCategory(!CheckBoxFilter.women.womenFilterCategory);
        break;
      case 'men':
        CheckBoxFilter.men.setMenCategory(!CheckBoxFilter.men.menFilterCategory);
        break;
      case 'electronics':
        CheckBoxFilter.eletronic.setEletronicCategory(!CheckBoxFilter.eletronic.eletronicFilterCategory);
        break;
      case 'jewelery':
        CheckBoxFilter.jewelery.setJewleryCategory(!CheckBoxFilter.jewelery.jeweleryFilterCategory);
        break;
      default:
        break;
    }
  }

  return (
    <div className="dark:text-white">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Categoria</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" onChange={() => toggleFilter('women')} />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Women Clothes</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" onChange={() => toggleFilter('men')} />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Men Clothes</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" onChange={() => toggleFilter('jewelery')} />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Jewelery</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" onChange={() => toggleFilter('electronics')} />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Eletronics</span>
        </label>
      </div>
    </div>
  );
};
