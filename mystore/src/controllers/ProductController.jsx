export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//-----------------------------
// Corrigido
export async function getSpecificProducts(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//---------------------------
export async function getCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//------------------------------
export async function getWomenCategory() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing",
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//----------------------------------
export async function getMenCategory() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing",
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//-------------------------------------
// Corrigido
export async function getEletronicCategory() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics",
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//=====================================--
export async function getJeweleryCategory() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery",
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//-----------------------------------------
