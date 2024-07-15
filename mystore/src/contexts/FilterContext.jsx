import { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export function useFilterProvider() {
  const context = useContext(FilterContext);
  return context;
}

export function FilterProvider({ children }) {
  const [womenFilterCategory, setWomenCategory] = useState(false);
  const [menFilterCategory, setMenCategory] = useState(false);
  const [eletronicFilterCategory, setEletronicCategory] = useState(false);
  const [jeweleryFilterCategory, setJewleryCategory] = useState(false);

  const CheckBoxFilter = {
    women: {
      womenFilterCategory,
      setWomenCategory
    },
    men: {
      menFilterCategory,
      setMenCategory
    },
    eletronic: {
      eletronicFilterCategory,
      setEletronicCategory
    },
    jewelery: {
      jeweleryFilterCategory,
      setJewleryCategory
    }
  };

  return (
    <FilterContext.Provider value={{ CheckBoxFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
