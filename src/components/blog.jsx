import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

const Blog = () => {
	const { blogId } = useParams();
	const [MDXContent, setMDXContent] = useState(null);

	useEffect(() => {
		import(`../blog/${blogId}.mdx`)
			.then((module) => setMDXContent(module.default))
			.catch((err) => console.error(err));
	}, [blogId]);

	return (
		<div>
			{MDXContent ? (
				<MDXProvider>
					<MDXContent />
				</MDXProvider>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Blog;
