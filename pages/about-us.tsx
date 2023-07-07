import Footer from '@/components/Footer'
// import Header from '@/components/Header'
// import React from 'react'
// import Image from 'next/image'
// import About2 from '@/assets/about1.png'
// import About1 from '@/assets/about2.png'
// import dbConnect from '@/lib/dbConnection';
// import About from '@/models/ProductMo';

// const AboutUs = (props: any) => {
//     const { about } = props
//     // console.log({props})
//   return (
//     <div className='overflow-hidden'>
//         <Header />
//         <section className='section top-section grad-to-right grad-to-right flex flex-col gap-3 text-white'>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">About Us</h1>
//             <span className='font-bold'>Home / About Us</span>
//         </section>
//         <section className='section pt-12 pb-10 relative after:absolute after:translate-y-6 after:bottom-0 after:-left-[10%] after:w-[120%] after:h-16 after:rounded-[100%] after:bg-white'>
//             <h1 className="text-2xl text-primary font-bold font-argentinum py-3">
//                 The Brilliant Brain Scholarship Scheme
//             </h1>
//         </section>
//         <section className="section py-20 bg-primary text-white">
//             <div className="flex flex-col md:flex-row gap-12 mb-20">
//                 <div className="flex-1 relative md:-top-20">
//                     <Image width={100} height={100} src={about?.first_section?.image || About1} alt="" className="w-full max-w-sm max-h-450px" />
//                 </div>
//                 <div className="flex-1 max-w-lg flex flex-col gap-3">
//                     {about?.first_section?.text?.split('\n').map((text: string, i: number) => (
//                         <p key={i}>{text}</p>
//                     ))}
//                 </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-12">
//                 <div className="flex-1 max-w-lg flex flex-col gap-3">
//                     {about?.second_section?.text?.split('\n').map((text: string, i: number) => (
//                         <p key={i}>{text}</p>
//                     ))}
//                 </div>
//                 <div className="flex-1 flex justify-end">
//                     {/* <Image src={About2} alt="" className="w-full max-w-sm" /> */}
//                     <Image width={100} height={100} src={about?.second_section?.image || About2} alt="" className="w-full max-w-sm max-h-450px" />
//                 </div>
//             </div>
//         </section>
//         <section className="section flex flex-col gap-3 pt-20 pb-20 relative after:absolute after:top-0 after:-translate-y-6 after:-left-[10%] after:w-[120%] after:h-16 after:rounded-[100%] after:bg-white">
//             {about?.third_section?.split('\n').map((text: string, i: number) => (
//                         <p key={i}>{text}</p>
//                     ))}
//             {/* <p>
//                 At Brilliant Brains, we are committed to empowering individuals through education and fostering a community of lifelong learners. With a passion for knowledge and a dedication to excellence, we strive to provide transformative educational experiences that shape lives and make a positive impact.
//             </p>
//             <p>
//                 Our vision is to be a leading institution that inspires and equips individuals to reach their full potential. We believe in the power of education to transform lives, unlock opportunities, and create a better future for individuals and society as a whole.
//             </p>
//             <p>
//                 Our mission is to provide accessible, high-quality education that nurtures intellectual curiosity, fosters critical thinking, and promotes personal and professional growth. We aim to create an inclusive learning environment that celebrates diversity, encourages collaboration, and prepares individuals to thrive in a rapidly changing world.
//             </p>   
//             <p>
//                 At Brilliant Brains, we take a holistic approach to education, focusing not only on academic excellence but also on the development of well-rounded individuals. We prioritize practical, hands-on learning experiences that bridge the gap between theory and practice. Through innovative teaching methods, state-of-the-art resources, and a supportive community, we aim to inspire a love for learning and cultivate essential skills for success in the modern world.
//             </p>
//             <p>
//                 Our team of passionate educators and staff members are the heart and soul of Brilliant Brains. With expertise in their respective fields, they are committed to providing a nurturing and stimulating learning environment. Our faculty members are not only knowledgeable professionals but also mentors who guide and inspire students to explore their passions and achieve their goals.
//             </p>    
//             <p>
//                 We maintain high standards of academic rigor, continually updating our curriculum to align with industry demands and emerging trends. We foster a culture of continuous improvement, encouraging students and staff alike to strive for excellence in all aspects of their educational journey.
//             </p>
//             <p>
//             Whether you are a student, parent, educator, or lifelong learner, we invite you to join our vibrant learning community. Together, we can embark on a journey of discovery, growth, and lifelong learning. Explore our range of programs, engage with our passionate community, and unlock your potential at Brilliant Brains.
//             </p> */}
//         </section>
//         <Footer />
//     </div>
//   )
// }

// export default AboutUs

// export const getServerSideProps = async () => {
//     let about = []
//     try {
//         await dbConnect()
//         const res = await About.find().lean();
//         about = JSON.parse(JSON.stringify(res[0]))
//     } catch (error) {
//         console.log(error)
//         return {
//             props: {
//                 title: 'About Us',
//                 about: {},
//                 status: 'failed'
//             }
//         }
//     }

//     return {
//         props: {
//             title: 'About Us',
//             about: about || {},
//             status: 'success'
//         }
//     }
// }