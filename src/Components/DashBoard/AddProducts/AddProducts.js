import React from 'react';
import { useForm } from 'react-hook-form';


const AddProducts = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        // e.preventDefault();

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.insertedId) {
                    alert('Your Item has been added');
                    // reset();
                }
            });


    }

    return (
        <div className="container-fluid d-flex flex-lg-row flex-sm-column
        ">
            <div className="col-lg-6 col-sm-11 p-5 mx-auto add-item">
                <h3 className="text-center text-danger fw-bold mb-3">Add Products</h3>

                <form
                    className="d-flex flex-column"
                    onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="Image Url" />
                    <input {...register("name", { required: true, })} placeholder="Products's Name" />


                    <input type="number" step="any" {...register("price")} placeholder="Products's Price" />
                    <input type="number" step="any" {...register("ratings", { min: 0, max: 5 })} placeholder="ratings in 5" />
                    <textarea {...register("discription")} placeholder="Products's Description" />
                    <textarea {...register("directions")} placeholder="Directions" />
                    <input className="text-white bg-warning border-5 shadow-lg fw-bold fs-5 border-danger" type="submit" />
                </form>
            </div>
            {/* <div className="container">
                <img
                    className="img-fluid"
                    src="https://image.freepik.com/free-vector/delivery-man-handling-parcel-package-box-customer_218660-352.jpg" alt="" />
            </div> */}


        </div>
    );
};

export default AddProducts;