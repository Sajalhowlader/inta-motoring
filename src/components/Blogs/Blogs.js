import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className='api-container'>
            <h1 className='img-title'>Question Answer</h1>
            <article className='api-info'>
                <h1>Contex API</h1>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. When we create a common function and pass the function by props to other functions it's pretty boring. We need to write the same thing over and over again. Context API helps us a lot here. We can easily make that function pass in any other component by creating a function in the parent component. It is often the case that we need to send a function between the parent component to the child component and another child component. In this case, if we repeatedly send props, the duplication of our code increases a lot. We create a context between the parent components, whatever the code we send to the child component is DRY and there is no duplication of the code.</p>
            </article>
            <article className='api-info'>
                <h1>Semantic Tag</h1>
                <p>
                    Semantic element = elements with a meaning.
                    A semantic element clearly describes its meaning to both the browser and the developer.
                    Example of Semantic tag.
                    1.from <br />
                    02.table <br />
                    03.aside <br />
                    04.header <br />
                    05. footer etc. <br />
                    Semantic Tech Implementing Semantic Tech is important for website ranking to help the semantic tag browser robot crawl.With the help of semantic element tags we can easily understand which element has been used for which purpose.Semantic element tags are very important for browser robots and developers because we developers do not easily understand why a tag has been used.
                </p>
            </article>
            <article className='api-info'>
                <h1>Inline vs block vs inline-block   </h1>
                <p>
                    01.Inline:Inline as the name says “included as a part of the main text and not as a separate section”. Inline elements occupy the space as needed within the space defined by the main element. Unlike block-level elements, they do not begin on new lines.

                    Some of the inline elements are a,span,img,code,cite,button,input etc. <br />
                    <br />
                    02.Block: A Block-level element occupies the entire space of the parent (container) such as div and p in the example .

                    Note that both div and p start from a new line each time, forming a block-like structure. Block-level elements begin on new lines.

                    Common block-level elements are div,p,article,section,figure,footer etc. <br />
                    <br />
                    03. Inline-block:Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You'll have to declare display: inline-block in your CSS code.
                    One common use for using inline-block is for creating navigation links horizontally, as shown below.
                </p>
            </article>

        </section>
    );
};

export default Blogs;