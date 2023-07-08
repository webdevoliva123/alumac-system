import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../cssFiles/products.css'
import {getAllCategories} from '../../utils/productsUtils'
import Cat from "./Cat";

const Category = (proData) => {
    const [currentCategory, setCurrentCategory] = useState({cat:"all"})
    const [searchParams, setSearchParams] = useSearchParams();

  const categorys = [
    {
      categoryId: "all",
      categoryName: "All",
    },
    {
      categoryId: "curtains",
      categoryName: "Curtains",
      subCategory : [
        {
          subCategoryId: "curtain1",
          subCategoryName: "Curtain1", 
        },
        {
          subCategoryId: "curtain2",
          subCategoryName: "Curtain2", 
        },
        {
          subCategoryId: "curtain3",
          subCategoryName: "Curtain3", 
        },
        {
          subCategoryId: "curtain4",
          subCategoryName: "Curtain4", 
        }
      ]
    },
    {
      categoryId: "beds",
      categoryName: "Beds",
      subCategory : [
        {
          subCategoryId: "bed1",
          subCategoryName: "Bed1", 
        },
        {
          subCategoryId: "bed2",
          subCategoryName: "Bed2", 
        },
        {
          subCategoryId: "bed3",
          subCategoryName: "Bed3", 
        },
        {
          subCategoryId: "bed4",
          subCategoryName: "Bed4", 
        }
      ]
    },
    {
      categoryId: "lights",
      categoryName: "Lights",
      subCategory : [
        {
          subCategoryId: "light1",
          subCategoryName: "Light1", 
        },
        {
          subCategoryId: "light2",
          subCategoryName: "Light2", 
        },
        {
          subCategoryId: "light3",
          subCategoryName: "Light3", 
        },
        {
          subCategoryId: "light4",
          subCategoryName: "Light4", 
        }
      ]
    },
    {
      categoryId: "life_support_equipment",
      categoryName: "Life Support Equipments",
      subCategory : [
        {
          subCategoryId: "life_support_equipment1",
          subCategoryName: "Life Support Equipments1", 
        },
        {
          subCategoryId: "life_support_equipment2",
          subCategoryName: "Life Support Equipments2", 
        },
        {
          subCategoryId: "life_support_equipment3",
          subCategoryName: "Life Support Equipments3", 
        },
        {
          subCategoryId: "life_support_equipment4",
          subCategoryName: "Life Support Equipments4", 
        }
      ]
    }
  ];

  useEffect(() => {
    const cat = searchParams.get('cat')
    const subCat = searchParams.get('subCat')
    return setCurrentCategory({cat,subCat})
  },[searchParams])

  return (
    <div
      className="cat_container"
    >
      <div

        className="cat_container-child"
      >
        {categorys.map((category) => {
          return (
            <>
              <Cat category={category} currentCategory={currentCategory} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
