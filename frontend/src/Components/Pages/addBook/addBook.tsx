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
    const {register, handleSubmit} = useForm<formValues>();

    const onSubmit = async (data:formValues)=>{
        console.log(data);
    }
    return (
        <div className="addBook">
			<form action="POST">
                <input type="number"  placeholder="book id" {...register("bookID")}/>
                <input type="text" placeholder="title" {...register("title")}/>
                <input type="number" placeholder="pages" {...register("pages")}/>
                <input type="number" placeholder="price" {...register("price")}/>
                <input type="number" placeholder="author id" {...register("authorID")}/>
                <input type="submit" value={"submit"}/>
            </form>
        </div>
    );
}

export default AddBook;
