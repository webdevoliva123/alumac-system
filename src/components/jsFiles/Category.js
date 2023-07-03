import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../cssFiles/products.css'

const Category = () => {
    const [categoryList, setCategoryList] = useState('all')
    const [searchParams, setSearchParams] = useSearchParams();

  const categorys = [
    {
      categoryId: "all",
      categoryName: "All",
    },
    {
      categoryId: "diagnostic_equipment",
      categoryName: "Diagnostic Equipment",
    },
    {
      categoryId: "surgical_equipment",
      categoryName: "Surgical Equipment",
    },
    {
      categoryId: "monitoring_equipment",
      categoryName: "Monitoring Equipment",
    },
    {
      categoryId: "life_support_equipment",
      categoryName: "Life Support Equipment",
    },
    {
      categoryId: "patient_care_equipment",
      categoryName: "Patient Care Equipment",
    },
    {
      categoryId: "laboratory_equipment",
      categoryName: "Laboratory Equipment",
    },
    {
      categoryId: "rehabilitation_equipment",
      categoryName: "Rehabilitation Equipment",
    },
    {
      categoryId: "imaging_equipment",
      categoryName: "Imaging Equipment",
    },
    {
      categoryId: "emergency_and_trauma_equipment",
      categoryName: "Emergency and Trauma Equipment",
    },
    {
      categoryId: "medical_furniture_and_storage",
      categoryName: "Medical Furniture and Storage",
    }
  ];

  useEffect(() => {
    const query = searchParams.get('cat')
    if(!query){
        return setCategoryList('all')
    }else{
        return setCategoryList(query)
    }
  },[searchParams])

  return (
    <div
      style={{
        width: "100%",
        padding: "10px 100px",
        marginBottom: "40px",
        overflow: "hidden",
        
      }}
      className="cat_container"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {categorys.map((category) => {
          return (
            <div
                
              style={{
                width: "auto",
                marginRight: "20px",
                marginBottom: "10px",
              }}
            >
             <a href={`/products?cat=${category.categoryId}`}> <article style={{cursor:"pointer",color:category.categoryId === categoryList ? 'crimson' : 'black',textDecoration:category.categoryId === categoryList ? 'underline' : 'none'}}>{category.categoryName}</article></a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
