import "./addBook.css";
import {useState} from "react";
import {useForm} from "react-hook-form";
type formValues = {
    bookID: number;
    title: string;
    pages: number;
    price: number;
    authorID: number;
}

function AddBook(): JSX.Element {
    const {register, handleSubmit, reset, formState :{ errors}} = useForm<formValues>();

    const onSubmit = (data:formValues)=>{
        console.log(data);
    }
    return (
        <div className="addBook">
            <h2>Add Book</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="bookID">Book ID</label><br />
                <input  type="number" placeholder="book id"  {...register("bookID", {required: true})} name="bookID"/><br/>
                <label htmlFor="title">Title</label><br />
                <input type="text" placeholder="title" {...register("title", {required: true, minLength: 10})} name="title"/><br/>
                <label htmlFor="pages">Pages number</label><br />
                <input type="number" placeholder="pages" {...register("pages",{required:true})} name="pages"/><br/>
                <label htmlFor="price">Book Price</label><br />
                <input type="number" placeholder="price" {...register("price", {required: true})} name="price"/><br/>
                <label htmlFor="authorID">Author ID</label><br />
                <input type="number" placeholder="author id" {...register("authorID", {required: true})} name="authorID"/><br/>
                <input type="submit" value={"submit"} style={{marginLeft:"auto", marginRight:"auto"}}/>
            </form>
        </div>
    );
}

export default AddBook;
