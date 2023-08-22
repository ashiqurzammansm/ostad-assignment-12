// pages/single-blog/[slug].js
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SingleBlog = ({ blog }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Header />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Footer />
    </div>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  // Fetch slugs from API
  const slugs = ['blog-post-1', 'blog-post-2']; // Example slugs
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch blog data based on slug
  const blog = {
    title: 'Sample Blog Post',
    content: 'This is a sample blog post.',
  }; // Example data
  return { props: { blog } };
}
