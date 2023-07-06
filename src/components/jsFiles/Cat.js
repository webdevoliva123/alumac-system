import React from "react";
import '../cssFiles/products.css'
import DArrow from '../../img/dArrowIcon.png'

const Cat = ({category,currentCategory}) => {
  return (
    <div
      className="catButton"
    >
      <a href={`/products?cat=${category.categoryId}`}>
        <article
          style={{
            cursor: "pointer",
            color: category.categoryId === currentCategory?.cat ? "crimson" : "black",
            textDecoration:
              category.categoryId === currentCategory?.cat ? "underline" : "none",
            display:'flex',
            justifyContent: 'center',
            alignItems : 'center'
          }}
        >
          {category.categoryName}
          {/* arrow */}
          {category.subCategory && category.categoryId !== 'all' && <div className={`arrowDiv ${category.categoryId === currentCategory?.cat && 'active'}`}>
            <img src={DArrow} className="arrowImg"/>
          </div>}
        </article>
      </a>
      <div className={`subCatDiv ${category.categoryId === currentCategory?.cat && category.categoryId !== 'all' && 'active'}`}>
          {
            category?.subCategory?.map((subCat) => {
                console.log(subCat);
                return (
                    <>
                        <a href={`/products?cat=${currentCategory.cat}&subCat=${subCat?.subCategoryId}`} className="subCatLink">{subCat?.subCategoryName}</a>
                    </>
                )
            })
          }
        </div>
    </div>
  );
};

export default Cat;
