"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Home from './components/Home';
import Achievements from './components/Achievements';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const ContentDiv = useRef(null)
  const handleLinkClick = (section) => {
    console.log(section);
    setActiveSection(section);
    scrollToSection(section);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    // element.scrollIntoView({ behavior: 'smooth' });
    console.log(element)
  };

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = ContentDiv.current.scrollTop;

      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
        ) {
          setActiveSection(section.id);
        }
      });
    };
    ContentDiv.current.addEventListener('scroll', handleScroll);
    return () => {
      ContentDiv.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleUrlAnchorChange = () => {
      const sectionFromUrl = window.location.hash.substr(1);
      setActiveSection(sectionFromUrl);
    };

    window.addEventListener('hashchange', handleUrlAnchorChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlAnchorChange);
    };
  }, []);

  useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);

  return (
    <div className="h-screen bg-[url('/bg.png')] bg-no-repeat bg-[length:100%_100%] flex" >
      <div className="border-r-2 border-gray-300 w-[380px] h-screen p-10 relative">
        <nav className=''>
          <div className="h-[120px] w-[120px]">
            <img src="/liton.jpeg" className='rounded-lg' alt="" />
          </div>
          <div className=" text-white mb-5 mt-1">
            <h1 className="text-3xl font-bold  text-[28px]">Liton Nandi</h1>
            <p>UX/UI Designer</p>
          </div>
          <ul className='text-white'>
            <li className='w-full '>
              <a
                href="#home"
                className={"w-full text-[18px] leading-[28px] block p-2 rounded hover:bg-[rgba(118,98,230,1)] hover:text-white" + (activeSection === 'home' ? ' bg-[rgba(118,98,230,1)] text-white' : '')}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li className='w-full '>
              <a
                href="#experience"
                className={"w-full text-[18px] leading-[28px] block p-2 rounded hover:bg-[rgba(118,98,230,1)] hover:text-white" + (activeSection === 'experience' ? ' bg-[rgba(118,98,230,1)] text-white' : '')}
                onClick={() => handleLinkClick('experience')}
              >
                Experience
              </a>
            </li>
            <li className='w-full '>
              <a
                href="#project"
                className={"w-full text-[18px] leading-[28px] block p-2 rounded hover:bg-[rgba(118,98,230,1)] hover:text-white" + (activeSection === 'project' ? ' bg-[rgba(118,98,230,1)] text-white' : '')}
                onClick={() => handleLinkClick('project')}
              >
                Project
              </a>
            </li>
            {/* Add more links for other sections */}
          </ul>
        </nav>
        <div className=" absolute bottom-10">
          <div className="flex gap-2">
            <div href="" className="h-[40px] w-[40px] p-2 bg-[#5f5f5f6e] rounded-full">
              <a href="">
                <img src="./fb.png" className='h-full w-full' alt="" />
              </a>
            </div>
            <div href="" className="h-[40px] w-[40px] p-2 bg-[#5f5f5f6e] rounded-full">
              <a href="">
                <img src="./in.png" className='h-full w-full' alt="" />
              </a>
            </div>
            <div href="" className="h-[40px] w-[40px] p-2 bg-[#5f5f5f6e] rounded-full">
              <a href="">
                <img src="./dd.png" className='h-full w-full' alt="" />
              </a>
            </div>
            <div href="" className="h-[40px] w-[40px] p-2 bg-[#5f5f5f6e] rounded-full">
              <a href="">
                <img src="./bh.png" className='h-full w-full' alt="" />
              </a>
            </div>
            <div href="" className="h-[40px] w-[40px] p-2 bg-[#5f5f5f6e] rounded-full">
              <a href="">
                <img src="./insta.png" className='h-full w-full' alt="" />
              </a>
            </div>
          </div>
          <h1 className='text-white text-[14px] mt-2'>Copyright © 2023 Liton Nandi. All rights reserved.</h1>
        </div>

      </div>

      <div className="overflow-y-auto w-full text-white text-center" ref={ContentDiv} id="content">
        <section id="home" className='p-10' >
          <Home />
        </section>
        <section id="experience" className='p-10 h-screen'>
          <Achievements />
        </section>
        <section id="project" className='p-10'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium totam ipsam corrupti dolor? Aut saepe modi explicabo tenetur, adipisci praesentium odit possimus mollitia eius dolor illum animi ipsam eos quod dignissimos porro nemo consequuntur placeat nihil sint! A totam architecto voluptate dolor minus excepturi veritatis ab, harum accusamus deserunt ea delectus dicta quisquam beatae culpa cum tempore aspernatur consequuntur eligendi aliquam earum blanditiis qui aliquid! Modi quibusdam libero reprehenderit exercitationem nostrum sint, aliquam quidem vel ducimus veniam in, illum, nihil eos veritatis fugit. Maiores doloribus nobis totam, quia fugit voluptate tempora distinctio incidunt esse eius facilis? Error consequuntur nesciunt saepe suscipit quam illum in sapiente illo, beatae, officia accusamus magnam. Doloribus cupiditate et magni praesentium repellat dolorem nihil enim doloremque, placeat porro officiis nemo magnam officia exercitationem aliquid molestias suscipit rem veritatis sapiente sequi. Fuga commodi ipsam enim itaque? Magni ducimus laboriosam, natus id similique voluptate placeat animi aperiam cumque facilis aut aspernatur dolorum officia quis eum cum! Nam vitae libero blanditiis sunt voluptas, et neque praesentium, consectetur delectus accusantium incidunt! Laborum vitae et impedit magni architecto facilis perferendis similique perspiciatis quidem temporibus eius vel animi, est iure. Assumenda quia possimus asperiores incidunt molestias laboriosam maiores saepe, sapiente nemo dolorem. Voluptatibus a quas veritatis sequi quis sit error, quam culpa atque cupiditate odit non rem voluptates libero voluptatem, officia dolorum quasi neque reiciendis dolore. Vero in laboriosam voluptatem tempora, dolore soluta qui velit laborum aspernatur necessitatibus assumenda fugiat aperiam quidem, fugit cumque incidunt natus porro nobis dolores dolorem minus explicabo, quae quasi. Officia iste ab atque voluptatibus eaque doloremque temporibus debitis animi perferendis sapiente, commodi est officiis molestias doloribus iusto optio quaerat modi, mollitia necessitatibus laboriosam! Illo non dolore dolores rerum deleniti officiis quia voluptas nemo cum iusto sed quasi asperiores natus blanditiis minima molestias autem possimus, accusantium eum officia saepe necessitatibus ex, consequatur vitae? Reiciendis ipsa in hic recusandae facilis, repudiandae nobis. Esse voluptatum officia ex laborum, quis explicabo aspernatur delectus cupiditate neque. Cupiditate eum dolor maxime optio consectetur, nostrum illum architecto corrupti facere assumenda nam cumque nobis earum provident quidem libero suscipit distinctio. Ullam exercitationem ducimus voluptas molestiae libero maiores unde eligendi inventore repellendus consequuntur suscipit sapiente soluta magnam at culpa quae, velit harum iste possimus! Doloribus ducimus minima eligendi ipsa ullam reiciendis quo quidem debitis. Quo aliquam porro, rerum illum maxime eveniet quas nemo ipsa iste reprehenderit, autem, adipisci sed. Fuga quis voluptate pariatur molestiae repellat tempora nihil, amet harum quisquam tempore sapiente error enim ea eum illum repellendus odit animi facilis officia quidem. Laudantium, distinctio pariatur tempore minus ab dicta inventore reprehenderit veritatis eum vitae facere ad nisi soluta voluptas obcaecati delectus ut excepturi eveniet illum. Neque recusandae ut vitae facere deleniti veritatis quae accusamus expedita cupiditate. Mollitia, aspernatur modi sed expedita commodi praesentium eveniet nihil. Architecto ullam rem quaerat iure ipsam, magni sed doloribus magnam hic, animi voluptate. Non laborum rem iusto ipsam reprehenderit suscipit atque beatae repudiandae eum molestiae. Aliquam voluptatibus similique cupiditate, sit quasi, dolores animi labore recusandae iste rerum alias delectus, eligendi quod praesentium voluptate eveniet sunt fugit! Dolor, laborum eius explicabo expedita fugit eveniet modi magnam earum quo repellat beatae eaque magni nihil corporis quidem delectus doloribus eligendi quos optio saepe tenetur adipisci doloremque. Placeat veniam reiciendis suscipit natus, eius illum. Animi perspiciatis consequuntur assumenda unde. Commodi exercitationem quod blanditiis dolores porro modi tenetur explicabo? A blanditiis iusto exercitationem doloribus, itaque modi. Ad distinctio exercitationem doloribus vel molestiae, consectetur temporibus, explicabo adipisci dolore repudiandae consequuntur ab. Dolorem non error omnis, soluta itaque magnam, vitae veniam consequatur perspiciatis repudiandae dignissimos reiciendis odit cumque, fugit ipsum maxime minus nobis autem nostrum voluptatum. Saepe fuga odio pariatur unde tenetur libero, quae eius alias voluptatem, necessitatibus ipsa asperiores? Voluptate labore nulla soluta corporis voluptatum temporibus qui nemo autem quia porro. Ex beatae error obcaecati dolor dignissimos quae. Natus, rerum! Itaque necessitatibus ipsam, dignissimos eos a sequi magnam officiis optio tenetur atque? In dicta repellat, corrupti hic tempore ipsam blanditiis voluptatum quidem nihil earum excepturi neque, officia itaque velit modi iste sit eum aspernatur. Suscipit natus rem at fuga quas repudiandae! Laborum cumque eius fuga laboriosam, tempora illum voluptatibus! Praesentium eum obcaecati, reprehenderit eaque voluptatibus labore quas, ut harum quo enim deserunt tempore voluptas laborum vel, ea vitae eos officiis asperiores doloribus assumenda corrupti sunt impedit? Eum reiciendis, cum, sint voluptatem velit optio eius totam repellendus numquam pariatur adipisci rerum quae facilis eveniet alias distinctio saepe? Tenetur repudiandae nam ducimus ullam vero porro deserunt et, recusandae rem. Magni cupiditate, sit ipsam reiciendis doloremque voluptatum laborum similique! Voluptas natus, aspernatur, quas officiis eos sunt deserunt, qui praesentium nam sapiente autem ab magni! At asperiores voluptatem necessitatibus possimus dignissimos odit voluptatibus est numquam. Odit expedita, dicta autem, placeat praesentium non, repellat sapiente sint blanditiis eligendi laboriosam. Velit harum minima vitae odio vel eaque laboriosam distinctio aliquid repellendus, dolore nobis laudantium, officia, quasi eius similique quidem voluptatum hic quia eligendi consequuntur nostrum repellat. Reiciendis nulla aspernatur, nostrum eveniet deserunt eligendi neque nesciunt maxime excepturi itaque saepe minima vero velit ut, dolor tempore qui sequi illo quod facilis unde! Perspiciatis adipisci eum, ex numquam doloremque non, error laborum pariatur voluptates saepe labore dignissimos quos, eveniet magni illo doloribus vitae. Numquam maiores, totam ullam eius magnam sint omnis, ducimus aliquam officiis nihil harum odio accusamus iure aspernatur? Mollitia deserunt ducimus nobis iusto blanditiis fuga incidunt molestias maxime illum, nemo architecto magni, nam eum ad dicta nihil suscipit porro fugiat sint. Doloremque, autem alias corporis repudiandae iste consequatur est facere, voluptatibus recusandae velit tempore ex veritatis quasi sequi ipsa. Atque adipisci amet provident sequi? Ab porro quibusdam deserunt odit tempore numquam voluptatum harum similique libero? Numquam, libero? Quasi accusamus voluptas obcaecati quibusdam quisquam animi at odio alias cum minima veritatis, neque cumque qui, accusantium sit aperiam molestias praesentium itaque nesciunt rerum officiis optio dolor facere. Vel quisquam illum delectus minus accusantium? Ducimus cum qui sed enim explicabo amet reiciendis, vero porro animi laborum. Dolore ullam reiciendis incidunt magnam aliquam quod veritatis nobis placeat fugit deleniti quia minima, labore, aperiam ipsa quibusdam eum perferendis voluptates asperiores obcaecati dignissimos accusantium quidem dolor praesentium consequatur. Quia labore hic laborum atque nulla cupiditate aut, dignissimos temporibus nobis perferendis dolore a in et laudantium cumque sapiente. Itaque ea ex autem pariatur natus maiores reiciendis accusantium nemo, nisi, nam dicta modi? Rem, nesciunt cumque autem explicabo esse excepturi ea odit, quae delectus facilis perferendis aspernatur eius labore odio suscipit qui inventore, dolores vero! Illo similique maiores dicta laborum unde, labore quam voluptates repellendus cumque sapiente rem perferendis suscipit corporis natus blanditiis voluptate quia provident quae dolores? Pariatur ratione mollitia eos doloribus ipsum nesciunt modi, voluptate consequuntur iusto accusantium voluptas officiis molestias excepturi reprehenderit placeat earum minima quia quasi impedit dolorem? Odio, enim nostrum, consectetur ad nam minima beatae voluptate provident consequatur maiores, id tenetur! Aut eligendi, ipsam sed error facilis sequi quae assumenda modi velit, maxime sit deleniti beatae aperiam laudantium necessitatibus distinctio incidunt, facere quasi! Nulla obcaecati iste dignissimos optio. Totam adipisci natus omnis labore aspernatur obcaecati harum consectetur vero voluptatem recusandae voluptatibus accusamus quisquam, ab placeat nesciunt dolor minus culpa. Rerum modi ea asperiores labore ex. Est sit ex laboriosam dolores libero expedita error consectetur pariatur itaque reprehenderit? Ullam repellendus enim voluptatibus, veritatis esse quae saepe consequatur minus soluta ea quidem hic illum dolorem repellat inventore expedita nisi est iure rerum velit praesentium porro nostrum? Debitis deleniti aspernatur ad quae facilis rem. A aliquid illo dignissimos odit soluta ab, blanditiis reprehenderit, non pariatur totam tenetur distinctio doloribus quo ipsa error voluptate cumque. Accusantium, hic repellat a consectetur amet iusto qui ex explicabo nam atque aspernatur recusandae officia expedita, autem itaque! Reprehenderit delectus obcaecati vero rerum quod excepturi possimus beatae, esse at dignissimos ex iusto deleniti consequuntur, aperiam quidem animi? Corrupti molestias temporibus sint explicabo repudiandae saepe laboriosam numquam eveniet praesentium omnis. Quia pariatur explicabo sunt minus nesciunt nam cum, facere itaque. Magnam, nam fuga! Perferendis reprehenderit dolore architecto laudantium nesciunt magni sed provident ipsa iure quibusdam maxime explicabo assumenda non, molestiae accusantium repellat illum fuga necessitatibus dolorem blanditiis? Eius quae consectetur quos officia nesciunt iure nobis! Maxime vel ipsam consequuntur nostrum ut vitae atque sequi! Quasi quam ipsa enim distinctio cum optio fugit quibusdam nemo assumenda sint in tempore neque soluta inventore laborum corporis beatae impedit voluptas, ipsam voluptatem autem totam quae. Dignissimos, unde eos explicabo ullam quia, earum quasi illo, minus culpa porro consectetur quaerat suscipit saepe modi vel facilis libero nobis quae delectus? Quis, velit! In maiores dignissimos a commodi. Maiores sint sapiente asperiores omnis sunt excepturi incidunt nulla officiis commodi, porro itaque, soluta, recusandae minima. Repellendus at commodi voluptatibus dolore numquam rem atque eligendi consectetur modi, veritatis quisquam a perspiciatis autem non unde ad minima quod accusamus. Atque amet porro doloribus, ex repellendus molestias tempora magnam pariatur nobis necessitatibus autem quasi, aliquid maxime, consequuntur id nemo cumque consectetur dolorem blanditiis illo distinctio non. Omnis accusantium dolorum neque ipsum beatae vero minima ratione eveniet repellendus. Vitae quia accusamus voluptatem doloremque, consectetur eos nobis ea repellat praesentium quos atque, rerum, beatae in mollitia ullam? Reprehenderit fugit hic ipsam et illo error tenetur. Similique, numquam! Facilis, quibusdam qui ut soluta rem assumenda similique debitis aliquam voluptates saepe beatae dolorem sed sit neque ex exercitationem veritatis quod minus adipisci accusamus. Magni officiis cumque animi fuga et, officia minus facere quas dolores nisi explicabo quis molestias aperiam architecto. Voluptatum sint a facere nulla, consequuntur quo porro saepe dolor dignissimos illo quis quisquam, rerum vero esse exercitationem dolorem obcaecati quod incidunt. Blanditiis repellat distinctio recusandae saepe ab, quas, voluptatibus delectus doloribus nulla aspernatur quo doloremque numquam, consectetur sapiente! Esse molestias excepturi quis aliquid provident voluptatibus autem consequatur ducimus id et vitae temporibus, dolores optio laborum omnis corrupti est corporis tempora beatae nam. Officiis, voluptate ea? Sint, laborum autem iure eos, ea dolorem aut corporis maxime corrupti tempore in, rerum necessitatibus repudiandae facere maiores. Nobis architecto mollitia fugiat nulla exercitationem error hic fuga magni earum facilis nihil nisi minus omnis excepturi quaerat debitis labore esse quod rem laudantium necessitatibus, dignissimos blanditiis perspiciatis! Id enim porro totam, molestias dolores, quam eveniet facere odio nisi rem veniam. Voluptatum facilis blanditiis fugit natus ab numquam dignissimos autem sequi culpa maxime distinctio iste quod alias sunt accusamus laudantium eius, quidem laborum odit eaque iure. Deserunt nemo placeat vel unde dolore eaque totam cum numquam earum nobis natus incidunt nulla in cumque reprehenderit dignissimos tenetur consequuntur ad inventore dolores nam, aspernatur eius? Labore doloremque vero, eos cum aliquam vitae quidem rerum laboriosam aspernatur, praesentium qui quasi aperiam, earum enim asperiores. Soluta quas fugit doloribus veniam animi deserunt quos! Facere eum, esse non totam expedita perspiciatis deleniti nostrum libero aperiam doloremque dolorem unde, mollitia error? Quod deserunt libero voluptatum consequatur deleniti! Molestiae, reprehenderit minima quaerat ad obcaecati soluta inventore nesciunt eligendi doloribus sunt, quos architecto numquam hic asperiores similique repellat, modi ea animi quisquam rem corporis eaque eveniet vitae aliquam! Ratione eligendi aliquid delectus incidunt saepe sequi ipsa repellat similique ipsam magni quisquam modi rerum neque atque nihil eius, officiis nesciunt. Nisi sed nesciunt corrupti ullam suscipit blanditiis corporis non consequatur doloremque reiciendis animi et, dolorum quas quasi, porro distinctio? Repudiandae, ipsa hic eius odio quidem commodi tenetur, ab earum, veritatis voluptates saepe maiores. Ipsa omnis dolorem, minus inventore ea nostrum ab maxime tempora soluta nesciunt illum. Veniam explicabo hic eligendi. Facere omnis impedit excepturi, ipsa obcaecati, nemo, quis a id sed praesentium molestiae saepe. Sunt numquam labore eius nesciunt reprehenderit assumenda consequatur animi itaque ipsum commodi ratione, vel sint vero quidem aliquam magnam iusto ducimus dolorem eligendi magni iste qui maxime, similique nulla? Vero inventore sequi eveniet doloribus quis sed iusto perferendis ex dolor aliquid libero voluptas reprehenderit, doloremque a omnis itaque voluptate fugit ut iure perspiciatis recusandae quia fuga voluptates. Optio quam illo quasi repellat placeat delectus architecto praesentium deserunt vel, modi in corporis corrupti cupiditate tempora assumenda provident ipsa perspiciatis dolorem culpa illum? Amet asperiores laborum deserunt, vero iste quod, ipsam omnis at dignissimos placeat ab minus ea eaque suscipit corporis impedit! Voluptatibus quo totam, officiis suscipit non facilis distinctio voluptas atque adipisci! 
        </section>
      </div>

    </div>




  );
};

export default Header;
