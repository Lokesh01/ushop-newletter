// Fetch data from assets/data/data.json
const fetchData = async () => {
  try {
    const response = await fetch("assets/data/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { topDealsData: [], newProducts: [] }; // Return empty data if fetch fails
  }
};

// Components
const TopDealCard = ({ data }) => {
  return `
    <div style="display: flex; flex-direction: column; height: fit-content; background-color: white; border-radius: 8px; padding: 12px; gap: 12px;">
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 500;">
        <img src="${data.image}" alt="${data.title}" style="max-width: 150px;" />
        <p style="font-size: 1.25rem; color: black;">${data.title}</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="background-image: url('assets/topDeals/voucher-bg.svg'); width: 40%; text-align: right; background-size: cover; background-position: center; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; border-radius: 4px;">
          <p style="font-size: 1.125rem; line-height: 1.625rem; background: linear-gradient(to right, #954D2E, #5E1212); -webkit-background-clip: text; color: transparent; font-weight: 500;">
            ${data.discount} Off
          </p>
        </div>
        <div style="display: flex; gap: 4px; align-items: baseline;">
          <p style="color: #F7A526; font-size: 1.875rem; font-weight: 600;">$${data.discounted_price}</p>
          <p style="color: #999999; text-decoration: line-through; font-size: 1.25rem;">${data.original_price}</p>
        </div>
      </div>
    </div>
  `;
};

const NewProductCard = ({ data }) => {
  return `
    <div style="display: flex; flex-direction: column; height: fit-content; border: 1px solid #EDEDED; border-radius: 8px;">
      <img src="${data.image}" alt="${data.title}" />
      <div style="display: flex; flex-direction: column; gap: 4px; padding: 12px;">
        <p style="color: black; font-size: 1.25rem;">${data.title}</p>
        <p style="font-size: 1.5rem; color: #F7A526; font-weight: 600;">$${data.price}</p>
      </div>
    </div>
  `;
};

// Render Dynamic Content
const renderDynamicContent = async () => {
  // Fetch data
  const data = await fetchData();

  // Render Top Deals
  const topDealsContainer = document.getElementById("top-deals-container");
  if (topDealsContainer) {
    topDealsContainer.innerHTML = data.topDealsData
      .map((data) => TopDealCard({ data }))
      .join("");
  }

  // Render New Products
  const newProductsContainer = document.getElementById(
    "new-products-container"
  );
  if (newProductsContainer) {
    newProductsContainer.innerHTML = data.newProducts
      .map((data) => NewProductCard({ data }))
      .join("");
  }
};

// Initial Render
renderDynamicContent();
