import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <section id="blog">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="font-bold text-color-secondary mb-4">
                        Innovation And Quality Improvement
                    </h4>
                    <h1 className="title">
                        Latest Updates, Solutions And Company News
                    </h1>
                </div>
                <BlogCard />
            </div>
        </section>
    );
};

export default Blog;
