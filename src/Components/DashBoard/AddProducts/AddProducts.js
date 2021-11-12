import React from 'react';
import { useForm } from 'react-hook-form';


const AddProducts = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        // e.preventDefault();

        fetch("https://thawing-ridge-68503.herokuapp.com/products", {
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
        <div className="addItem-bg">
            <h1 className="fw-light text-center text-white fs-1">Add Products</h1>
            <div className="row row container mx-auto row-cols-lg-1 row-cols-md-1 g-4">
                <div className="col-lg-6  mx-lg-auto add-item">
                    {/* <h1 className="fw-light text-center text-white fs-1">Add Products</h1> */}

                    <form
                        className="d-flex flex-column"
                        onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("img")} placeholder="Image Url" />
                        <input {...register("name", { required: true, })} placeholder="Products's Name" />


                        <input type="number" step="any" {...register("price")} placeholder="Products's Price" />
                        <input type="number" step="any" {...register("ratings", { min: 0, max: 5 })} placeholder="ratings in 5" />
                        <textarea {...register("discription")} placeholder="Products's Description" />
                        <textarea {...register("directions")} placeholder="Directions" />
                        <input className="w-50 mx-auto bg-danger btn text-white fw-bold fs-5 border-danger" type="submit" />
                    </form>
                </div></div>
        </div>
    );
};

export default AddProducts;