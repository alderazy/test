(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`./api/data.json?v=${new Date().getTime()}`,t=async()=>{try{let t=await fetch(e);if(t.ok&&t.status===200)return await t.json();throw Error(`the local json is problem`)}catch(e){return console.log(e),null}},n=async()=>{try{let e=await t();if(e&&e.global)return e.global;throw Error(`the json server is problem`)}catch(e){return console.log(e),null}},r=async(e,n)=>{try{let r=await t(),i=e.split(`/`).pop();if(r&&r[i])return[r[i],n];throw Error(`data not found this page`)}catch(e){return console.log(e),null}},i=(e,t)=>{if(!e)return;let n=[{id:`dashboard`,icon:`fa-regular fa-chart-bar`},{id:`settings`,icon:`fa-solid fa-gear`},{id:`profile`,icon:`fa-regular fa-user`},{id:`projects`,icon:`fa-solid fa-diagram-project`},{id:`courses`,icon:`fa-solid fa-graduation-cap`},{id:`friends`,icon:`fa-regular fa-address-book`},{id:`files`,icon:`fa-regular fa-file`},{id:`plans`,icon:`fa-regular fa-credit-card`}];return e[t].sidebar.map((e,r)=>`
        <li id=${e.id} class="flex li_nav cursor-pointer text-nowrap sm:hover:bg-[var(--bg-hover)] text-[var(--text-main)] py-3 px-3  rounded-lg">
              <i class="dark:text-[var(--text-main)] pe-8 text-[var(--text-main)] text-2xl 
              ${n[r].icon}   ${t===`eng`?``:`rotate-y-180 translate-x-[34px]`}"></i>
            <p>${e.text}</p>
          </li>

        `).join(``)},a=e=>{if(!e)return;let t=`text-[var(--text-main)] text-xl font-semibold`,n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`

        <div class='overflow-hidden sittings min-h-[100vh] w-[94%] py-5 md:w-[99%] mx-auto'>

             <h1 class='${t}'>${e[1]===`eng`?`Courses`:`دورات`}</h1>
             <div class ="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 min-h-[1000px]   xl:grid-cols-5 gap-5 md:px-6 py-6 ">

              ${e[0].map(r=>`
                     
                    <div class='col-span-1 bg-[var(--bg-card)] overflow-hidden  rounded-md '>

                        <div class='relative'>

                            <div class='relative aspect-video w-full overflow-hidden'>
                                   <span class='absolute rounded-full w-10 border border-white  h-10 top-5 overflow-hidden start-5'>
                                          <img class='absolute inset-0 w-full h-full object-cover' src="${r.photo}" alt="photo">
                                   </span>
                                   <img class='w-full h-full object-cover' src="${r.cover}" alt="cover" loading="lazy">
                            
                            </div>


                            <div class='px-3 py-4'>
                                <div>
                                   <h2 class='${t} pb-3'>${r[e[1]].title}</h2>
                                   <p class='${n}'>${r[e[1]].description}</p>
                                </div>

                            </div>

                            <div class='relative my-7 flex items-center justify-center'>
                                   <hr class=' w-full absolute z-[0] border-[var(--border-color)] '>
                                   <button class='bg-blue-500  z-1  bottom-[10%] end-[30%] text-white  rounded-md px-3 py-2'>${e[1]===`eng`?`Course Info`:`معلومات الكورس`}</button>
                            </div>

                            <div class='flex justify-between px-3 pb-4'>

                                   <p>
                                       <i class='fa-regular fa-user ${n}'></i>
                                       <span class='${n}'>${r.users}</span>
                                   </p>
                                   <p class='${n}'>${r.price} $</p>
                            </div>

                        
                        </div>
                    
                    </div>
                  
                  
                  `).join(``)}
              </div>
        </div>
    `};function o(e,t){let n=`text-[var(--text-main)] text-xl font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] ">
                <div class=" overflow-hidden  rounded-md">
                    <div class="flex justify-between py-5 bg-[var(--bg-input)] px-4">
                        <div class="flex-1">
                            <h2 class="  ${n}">${t===`eng`?`welcome`:`مرحبا`}</h2>
                            <p class="${r}">${t===`eng`?`alzero`:`الزيرو`}</p>
                            
                        </div>
                        <div class="flex-1 h-[100px] aspect-video">
                            <img class="w-full h-full" src="./img/wlcome.svg" alt="wlcome" fetchpriority="high">
                        </div>
                  </div>
                  <hr class="mt-20">
                  <div class='flex justify-around py-8'>
                  ${e.map(e=>`
                    <div>
                        <h3 class="${n}">${e[t].name}</h3>
                        <p class='${r} py-3'>${e[t].title}</p>
                    </div>
                    
                    `).join(``)}
                  
                    
                  </div>
                </div>
            </div>
            `}function s(e,t){let n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] rounded-md overflow-hidden">
                      <div class="p-5">
                      
                            <div>
                                <h2 class ="text-[var(--text-main)] text-xl font-semibold">${t===`eng`?`Quick Draft`:`مسودة سريعة`}</h2>
                                <p class ="${n} py-3">${t===`eng`?`write A Draft For Your ideas`:`اكتب مسودة لأفكارك`}</p>
                            </div>

                            <div>
                                <input class='bg-[var(--bg-input)] rounded-md ${n} w-full px-2 py-4' type="text" placeholder="title">
                                <textarea class ='mt-5 h-40 bg-[var(--bg-input)] rounded-md ${n} w-full px-2 py-4' type="text" placeholder="title"></textarea>
                                
                            </div>
                      </div>
                </div>
            `}function c(e,t){let n=`text-[var(--text-main)]  font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1  bg-[var(--bg-card)] rounded-md overflow-hidden mainprog">
                      <div class="p-4">
                            <div>
                                  <h2 class="${n} text-xl">${t===`eng`?`Yearly Targets`:`الأهداف السنوية`}</h2>
                                  <p class="${r}">${t===`eng`?`Targets Of The Year`:`أهداف العام`}</p>
                            </div>

                            <div class=" py-5">

                            ${e.map(e=>(`${e.color}`,e.progress,`<div class='flex mb-4 '>

                                    <div class=' w-[80px] grid place-items-center h-[80px]'
                                    style ="background-color: color-mix(in srgb, ${e.color} 30%, transparent)"
                                    >
                                        <i class="${e.icon} "
                                        style ="color: color-mix(in srgb, ${e.color} 100%, transparent)"
                                        ></i>
                                    </div>

                                    <div class="ps-5 w-full relative">
                                        <p class="${r}">${e[t].title}</p>
                                        <p class="${n}">${e.value}</p>
                                        <div class='relative top-5 h-3  w-full divprog'
                                        style="background-color: color-mix(in srgb, ${e.color} 10%, transparent)">
                                            <span data-width ='${e.progress}' class="absolute spanprog inline-block  h-full  start-0 "
                                            style ="width:0% ;  background-color: color-mix(in srgb, ${e.color} 80%, transparent)">
                                                <span class="w-10 h-7 cursor-pointer grid progspanSin place-items-center border  rounded-md 
                                                 absolute bottom-6 end-[-21px] text-[var(--text-main)]"
                                                style="border-color: color-mix(in srgb, ${e.color} 80%, transparent)"
                                                >${e.progress}%</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>`)).join(``)}
                            
                            </div>
                      </div>
                </div>
            `}function l(e,t){console.log();let n=`text-[var(--text-main)]  font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] rounded-md overflow-hidden ">
                      <div class="p-4">
                            <div>
                                  <h2 class="${n} text-xl">${t===`eng`?`Tickets Statistics`:`إحصائيات التذاكر`}</h2>
                                  <p class="${r}">${t===`eng`?` Everything About Support Tickets`:`كل ما يتعلق بتذاكر الدعم`}</p>
                            </div>
                                <div class='flex flex-wrap justify-around mt-5'>

                            ${Object.entries(e).map(([e,t])=>`
                                    <div class='border mb-4 w-[45%] border-gray-400 py-4 grid rounded-md  place-content-center text-center'>
                                        <i class ='${t.icon} ${r} '></i>
                                        <h3 class='${n} pt-3 lg'>${t.count}</h3>
                                        <p class='${r}'>${e}</p>
                                    </div>
                               `).join(``)}
                             </div>

                      </div>
                </div>
            `}function u(e,t){let n=`text-[var(--text-main)]  font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] rounded-md overflow-hidden  ">
                      <div class="py-4 pe-4">
                            <div class="px-4">
                                  <h2 class="${n} text-xl">${t===`eng`?`Latest News`:` اخر الاخبار`}</h2>
                            </div>

                            ${e.map((i,a)=>`

                                <div class='flex items-center py-5'>
                                    <div class='flex-col flex sm:flex-row  py-0 items-center px-4'>
                                        <div class="rounded-md mb-4 sm:mb-0 overflow-hidden me-4 bg-center min-w-[120px] h-[60px] bg-cover"
                                        style="background-image: url('${i.image}');"
                                        >
                                        </div>
                                        <div>
                                            <h2 class="${n} lg">${i[t].title}</h2>
                                            <p class="${r} text-sm">${i[t].description}</p>
                                        </div>
                                    </div>
                                     <span class='bg-[var(--border-color)] ${r} w-auro text-nowrap px-2 py-1 rounded-lg '>${i[t].time}</span>
                                </div>
                                ${e.length-1!==a&&`<hr class="my-4 border-[var(--border-color)]"> `||``}

                                `).join(``)}
                            </div>
                       
                    </div>
            `}function d(e,t){let n=`text-[var(--text-main)]  font-semibold`;return`<div class="col-span-1 px-4 py-4  bg-[var(--bg-card)] rounded-md overflow-hidden ">
                       
                        <div class="px-4">
                                  <h2 class="${n} text-xl">${t===`eng`?`Latest Tasks`:` أحدث المهام`}</h2>
                        </div>
                        ${e.map((r,i)=>`

                            <div class='${r.completed?`opacity-20`:``} '>
                                <h3 class='${r.completed?`line-through`:``} ${n} pb-2'>${r[t].title}</h3>
                                <p class="${r.completed?`line-through`:``} dark:text-[var(--text-muted)] text-[var(--text-muted)]">${r[t].description}</p>
                            </div>
                            ${e.length-1!==i&&`<hr class="my-4 border-[var(--border-color)]"> `||``}

                            `).join(``)}
                </div>
            `}function f(e,t){let n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] px-4 py-4 rounded-md overflow-hidden ">
                     
                            <div class="px-4">
                                  <h2 class="text-[var(--text-main)]  font-semibold text-xl">${t===`eng`?`Top Search Items`:`أبرز عناصر البحث`}</h2>
                            </div>
                            <div class="flex justify-between py-4">
                                <p class="${n}">${t===`eng`?`Keyword`:`المفاتيح`}</p>
                                <p class="${n}">${t===`eng`?`Search Count`:`عدد مرات البحث`}</p>
                            </div>

                            ${e.map(e=>`  <div class="flex justify-between py-4">
                                
                                    <p class="text-[var(--text-main)] ">${e[t].keyword}</p>
                                    <p class="text-[var(--text-main)] bg-[var(--border-color)] w-auro text-nowrap px-2 py-1 rounded-lg">${e.count}</p>
                                
                                </div>`).join(``)}

                          
                       
                    </div>
            `}function p(e,t){let n=`text-[var(--text-main)]  font-semibold`;return`<div class="col-span-1 bg-[var(--bg-card)] px-4 py-4 rounded-md overflow-hidden ">
                     
                            <div class="px-4">
                                  <h2 class="${n} text-xl">${t===`eng`?`Latest Uploads`:`اخر البحث`}</h2>
                            </div>

                            ${e.map(e=>`<div class="flex items-center justify-between py-4">
                                    <div class="flex items-center">
                                        <img class='w-10 me-4' src="${e.src}" alt="${e.name}" alt="${e.name}" loading='lazy'>
                                        <div>
                                        <p class='${n}'>${e.name}</p>
                                        <p class='dark:text-[var(--text-muted)] text-[var(--text-muted)]'>${e.uploader}</p>
                                        
                                        </div>
                                    </div>

                                    <p class="text-[var(--text-main)] bg-[var(--border-color)]  text-nowrap px-2 py-1 rounded-lg">${e.size}</p>
                                
                                </div>`).join(``)}

                          
                       
                    </div>
            `}function m(e,t){let n=`text-[var(--text-main)]  font-semibold`;return`<div class="col-span-1 bg-[var(--bg-card)] px-4 py-4 rounded-md overflow-hidden ">
                     
                            <div class="px-4">
                                  <h2 class="${n} text-xl">${t===`eng`?`Last Project Progress`:` تقدم المشروع الأخير`}</h2>
                            </div>
                            ${e.map((e,r)=>`
                                    <div>
                                        <div class="flex py-3 ">
                                            <div class="border  relative w-[20px] h-[20px] z-[50] bg-white border-blue-500 grid items-center rounded-full">
                                               <span class="absolute inset-0.5 rounded-full z-[40] ${e.status===`completed`?` bg-blue-500`:e.status===`current`?`Last_Project_Progress bg-blue-500`:``} "></span>
                                                ${r!==0&&`<span class='absolute bg-blue-400 w-[2px] h-7 z-[-1] end-[calc(8px)] bottom-[19px]'></span>`||``}
                                            </div>
                                            <p class="ps-5 ${n}">${e[t].step}</p>
                                        </div>
                                    </div>
                                `).join(``)}

                        
                       
                    </div>
            `}function h(e,t){let n=`text-[var(--text-main)]  font-semibold`;return`<div class="col-span-1 bg-[var(--bg-card)] px-4 py-4 rounded-md overflow-hidden ">
                     
                            <div class="px-4 pb-5">
                                  <h2 class="${n} text-xl">${t===`eng`?`Reminders `:` تذكيرات`}</h2>
                            </div>
                            ${e.map((e,r)=>`
                                    <div class='flex items-center mb-5'> 
                                        
                                            <span class='w-3 h-3 mx-6 rounded-full'
                                            style="background-color:${e.color}"
                                            ></span>
                                        <div class='flex-col ps-3 items-center border border-transparent '
                                        style='border-inline-start-color:${e.color}'>
                                            <h3 class='${n}'>${e[t].title}</h3>
                                            <p class='dark:text-[var(--text-muted)] text-[var(--text-muted)]'>${e.date}</p>
                                        </div>
                                    </div>
                                `).join(``)}

                        
                       
                    </div>
            `}function g(e,t){let n=`text-[var(--text-main)]  font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] px-4 py-4 flex flex-col rounded-md overflow-hidden ">
                     
                            <div class="px-4 pb-5">
                                  <h2 class="${n} text-xl">${t===`eng`?`Latest Post `:` اخر منشور`}</h2>
                            </div>
                            
                            <div class='flex-col flex content-around flex-1 justify-between'>
                            
                                <div class='flex'>

                                    <div class='w-10 h-10 rounded-full me-4 overflow-hidden'>
                                        <img class='w-full h-full' src="${e.avatar}" alt="sdsd" loading='lazy'>
                                    </div>
                                    <div>
                                        <h3 class ='${n}'>${e[t].author}</h3>
                                        <p class="${r}">${e[t].time}</p>
                                    </div>
                                </div>
                                <hr class='my-4 border-[var(--border-color)]'>
                                <p class='${n}'>${e[t].content}</p>
                                <hr class='my-4 border-[var(--border-color)]'>
                                <div class='flex justify-around'>
                                    <div class='flex items-center'>
                                        <i class='${r} fa-regular fa-heart'></i>
                                        <p class='text-[var(--text-main)] ms-3'>${e.likes}</p>
                                    </div>
                                    <div class='flex items-center'>
                                        <i class='${r} fa-regular fa-comments'></i>
                                        <p class='${r} ms-3'>${e.comments}</p>
                                    </div>
                               
                                </div>
                            </div>
                        
                       
                       </div>
            `}function _(e,t){return`<div class="col-span-1 bg-[var(--bg-card)] px-4 py-4 rounded-md overflow-hidden ">
                     
                            <div class="px-4 pb-5">
                                  <h2 class="text-[var(--text-main)]  font-semibold text-xl">${t===`eng`?`Social Media Stats`:` إحصائيات وسائل التواصل الاجتماعي`}</h2>
                            </div>
                            ${e.map(e=>`

                                    <div class='flex items-center justify-between mb-3'
                                    style="background-color:${e.color}20 "
                                    >
                                        <div class='flex items-center'>
                                            <div class='me-4 w-15 grid place-content-center p-3'
                                            style="background-color:${e.color}"
                                            >
                                                <i class='text-white text-4xl ${e.icon}'></i>
                                            </div>
                                            <p style="color:${e.color}">${e.count} ${e[t].label}</p>
                                        </div>
                                        <p class='text-white p-1 me-3 rounded-lg'
                                        style="background-color:${e.color}"
                                        >${e[t].actionText}</p>
                                    </div>
                                `).join(``)}
                          
                       
                       </div>
            `}function v(e,t){console.log();let n=`text-[var(--text-main)]  font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 overflow-x-scroll md:overflow-hidden w-full bg-[var(--bg-card)] px-4 py-4 rounded-md">
                     
                            <div class="px-4 pb-5">
                                  <h2 class="${n} text-xl">${t===`eng`?`Projects`:` مشاريع`}</h2>
                            </div>
                            <table class=' min-w-[700px] md:w-full overflow-x-scroll '>
                                <tr class="bg-[var(--bg-input)]">
                                    <th class='${n} px-3 py-3 text-start w-[30%]'>${t===`eng`?`Name`:`الاسم`}</th>    
                                    <th class='${n} px-3 py-3 text-start w-[13%]'>${t===`eng`?`Finish Date`:`تاريخ الانتهاء`}</th>    
                                    <th class='${n} px-3 py-3 text-start w-[20%]'>${t===`eng`?`Client`:`عميل`}</th>    
                                    <th class='${n} px-3 py-3 text-start w-[10%]'>${t===`eng`?`Price`:`السعر`}</th>    
                                    <th class='${n} px-3 py-3 text-start w-[15%]'>${t===`eng`?`Team`:`الفريق`}</th>    
                                    <th class='${n} px-3 py-3 text-start w-[12%]'>${t===`eng`?`Status`:`الحاله`}</th>    
                                </tr>

                                ${e.map(e=>`
                                    <tr class='hover:bg-[var(--bg-input)] transition-all duration-100'>

                                        <td class='py-3 border ps-3 border-[var(--border-color)] ${r}'>${e[t].name}</td>
                                        <td class='py-3 border ps-3 border-[var(--border-color)] ${r}'>${e.finishDate}</td>
                                        <td class='py-3 border ps-3 border-[var(--border-color)] ${r}'>${e[t].client}</td>
                                        <td class='py-3 border ps-3 border-[var(--border-color)] ${r}'>${e.price}</td>
                                        <td class='ps-3 py-3 border border-[var(--border-color)]'>
                                            <ul class='flex items-center'>

                                             ${e.team.map(e=>`
                                                    <li class="grid  overflow-hidden rounded-full place-content-center">
                                                    <div class='relative overflow-hidden rounded-full w-6 h-6 '>
                                                        <img class='absolute inset-0' src="${e}" alt="${e}" loading='lazy'>
                                                    </div>
                                                    </li>
                                                

                                                    `).join(``)}
                                           
                                            </ul>
                                        </td>
                                        <td class='py-3 border flex items-center ps-3 border-[var(--border-color)] ${r}'>
                                        <p class='text-white p-2 text-nowrap text-sm/tight rounded-lg' style='background-color:${e.statusColors.bg}'>${e.status}</p></td>
                                    
                                    </tr>

                                    `).join(``)}

                            </table>

                       
                       </div>
            `}var y=[{val:o,name:`welcomeWidget`},{val:s,name:`empty`},{val:c,name:`yearlyTargets`},{val:l,name:`ticketsStatistics`},{val:u,name:`latestNews`},{val:d,name:`latestTasks`},{val:f,name:`topSearchItems`},{val:p,name:`latestUploads`},{val:m,name:`lastProjectProgress`},{val:h,name:`reminders`},{val:g,name:`latestPost`},{val:_,name:`socialMediaStats`}],b=e=>{if(e)return`

        <div class='overflow-hidden w-[94%] py-5 md:w-[99%] mx-auto'>
             <div class ="grid grid-cols-1    lg:grid-cols-2   xl:grid-cols-3 gap-5 md:px-6 py-6 ">
             ${y.map(t=>t.val(e[0][t.name],e[1])).join(``)}
             </div>
             <div class ="grid grid-cols-1 gap-5 md:px-6 ">
                 ${v(e[0].projects,e[1])}
             </div>
        </div>
    `},x=e=>{if(!e)return;let t=`text-[var(--text-main)] text-xl font-semibold`,n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`

        <div class='overflow-hidden sittings w-[94%] py-5 md:w-[99%] mx-auto'>

             <h1 class='${t}'>${e[1]===`eng`?`friends`:`الاصدقاء`}</h1>
             <div class ="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   xl:grid-cols-4 gap-5 md:px-6 py-6 ">

              ${e[0].map(r=>`
                     
                        <div class='col-span-1 bg-[var(--bg-card)] p-4 overflow-hidden  rounded-md '>
                             
                             <div class='relative'>

                                  <div class='absolute top-3 start-3 flex gap-3'>
                                        <span class='bg-[var(--bg-hover)] rounded-full w-8 flex items-center justify-center h-8 '><i class='fa-solid fa-phone '></i></span>
                                        <span class='bg-[var(--bg-hover)] rounded-full w-8 flex items-center justify-center h-8 '><i class='fa-regular fa-envelope'></i></span>
                                  </div>

                                  <div class='flex flex-col justify-center items-center'>
                                        <img class='rounded-full w-20 h-20' src="${r.avatar}" alt="photo">
                                        <h2 class=' ${t}'>${r[e[1]].name}</h2>
                                        <p class=' ${n}'>${r[e[1]].role}</p>
                                  </div>
                                  <hr class='border-[var(--border-color)] my-7'>

                                  <div class='flex justify-between'>
                                       <div>
                                             <div class='flex items-center'>
                                                   <i class='${n} fa-regular fa-face-smile fa-fw'></i>
                                                   <p class="ps-3 ${t}">${r.friendsCount} ${e[1]===`eng`?`frinds`:`اصدقاء`}</p>
                                             </div>
                                              <div class='flex items-center'>
                                                     <i class='${n} fa-solid fa-code-commit fa-fw'></i>
                                                     <p class="ps-3 ${t}">${r.projectsCount}${e[1]===`eng`?`projects`:`مشاريع`} </p>
                                             </div>
                                              <div class='flex items-center'>
                                                     <i class='${n} fa-regular fa-newspaper fa-fw'></i>
                                                     <p class="ps-3 ${t}">${r.articlesCount} ${e[1]===`eng`?`articles`:`مقالات`}</p>
                                             </div>
                                       
                                        </div>
                                        ${r.vip?`<div class='text-7xl font-semibold uppercase text-amber-200/20'>vip</div>`:``}
                                  </div>

                                  <hr class='border-[var(--border-color)] my-7'>
                                  <div class='flex items-center justify-between'>
                                        <p class='${n}'>${r.joinedDate}</p>
                                        <div class='grid grid-cols-2 justify-end gap-2'>
                                             <button class='text-white px-1 sm-px-5 w-15 sm:w-20 h-8  text-sm text-center py-2 rounded-md me-2 md:me-0 bg-blue-500'>Profile</button>
                                             <button class='text-white px-1 sm-px-5 w-15 sm:w-20 h-8  text-sm text-center py-2 rounded-md bg-amber-600'>Remove</button>
                                        </div>
                                  
                                  </div>


                             
                             </div>

                        </div>
                     
                     `).join(``)}
              </div>
        </div>
    `},S=e=>{if(!e)return;let t=`text-[var(--text-main)] text-xl font-semibold`,n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`,r=`bg-[var(--bg-card)]`,i=e[1];return`

        <div class='overflow-hidden sittings w-[94%] py-5 md:w-[99%] mx-auto'>

             <h1 class='${t}'>${e[1]===`eng`?`folder`:`الملفات`}</h1>
             <div class ="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4   xl:grid-cols-6 gap-5 md:px-6 py-6 ">

              ${Object.entries(e).map(([a,o])=>{if(typeof o==`object`)return`
                        <div class='${r} col-span-1 md:order-[-1] p-4 shadow-md'>

                                <h2 class='${t} text-3xl mb-4'>${e[1]===`eng`?`Files Statistics`:`إحصائيات الملفات`}</h2>
                                ${o.statistics.map(e=>`
                                        <div class='border border-[var(--border-color)]  p-2 mb-4 rounded-md flex  justify-between'>

                                             <div class='flex items-center'>

                                                <p class='me-2 p-2' style="background-color:${e.color}50"><i class='${e.icon}' style='color:${e.color}'></i></p>
                                                <div>
                                                     <p class='${t} text-[.8em] text-nowrap'>${e[i].type}</p>
                                                     <p class='${n} text-[.9em]'>${e.count}</p>
                                                </div>
                                             
                                             </div>
                                             <p class='${n} text-[.9em]'>${e.size}</p>
                                        
                                        </div>
                                     `).join(``)}
                        
                        </div>
                     
                        <div class=' col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-5 shadow-md
                        grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-4'>

                                ${o.list.map(e=>`
                                        <div class='${r} rounded-md col-span-1 overflow-hidden relative p-4'>

                                                <i class='fa-solid fa-download absolute top-3 start-3 text-[var(--text-muted)]'></i>

                                              <div class='text-center'>
                                                   <img class='w-20 hover:animate-spin h-30 m-auto' src="${e.src}" alt="{el.type}">
                                                   <p class='${t}'>${e[i].name}</p>
                                              </div>
                                              <p class='${n}'>${e[i].uploader}</p>
                                              <hr class='border-[var(--border-color)] mb-7 mt-2'>
                                              <div class='flex justify-between items-center'>
                                                   <p class='${n}'>${e.size}</p>
                                                   <p class='${n}'>${e.date}</p>
                                              </div>

                                        
                                        </div>
                                        

                                        `).join(``)}

                        </div>

                     
                     `}).join(``)}
              </div>
        </div>
    `},C=e=>{if(!e)return;let t=`text-[var(--text-main)] text-xl font-semibold`,n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`,r=`bg-[var(--bg-card)]`,i=e[1],{user_info:a,general_information:o,personal_information:s,job_information:c,billing_information:l,skills:u,latest_activities:d}=e[0];return`

        <div class='overflow-hidden sittings w-[94%]  md:w-[99%] mx-auto'>
             <h1 class='${t} py-10'>${e[1]===`eng`?`Profile`:`حساب تعريفي`}</h1>
             <div class ="${r} p-4 md:flex rounded-lg overflow-hidden md:px-6 py-6 ">



                 <div class='flex-col pe-4  items-center justify-center text-center'>
                    <img class='my-4 mx-auto w-15 h-15 rounded-full' src="${a.avatar}" alt="avatar">
                    <h2 class='${t}'>${a.name}</h2>
                    <p class="${n} my-2">level ${a.level}</p>
                    <div class='mx-auto w-[60%] relative bg-[var(--bg-input)] h-3 my-2 rounded-full'>
                        <span class='absolute h-full w-[50%] top-0 start-0 bg-blue-600 rounded-full'></span>
                    </div>
                   <div class='my-2'>
                         <i class="fa-solid text-amber-300 fa-star c-orange fs-13"></i>
                         <i class="fa-solid text-amber-300 fa-star c-orange fs-13"></i>
                         <i class="fa-solid text-amber-300 fa-star c-orange fs-13"></i>
                         <i class="fa-solid text-amber-300 fa-star c-orange fs-13"></i>
                         <i class="fa-solid text-amber-300 fa-star c-orange fs-13"></i>
                   </div>
                    <p class='${n}'>${a.rating} rating</p>

                 </div>

                

                <div class ='flex-1'>


                        <div class='flex-1 border border-transparent  border-s-[var(--border-color)]'>
                            <h3 class='${n} pb-4 ps-5'>${i===`eng`?`General lnformation`:`معلومات عامة`}</h3>

                        <div class='flex gap-10 flex-wrap ps-5 items-center'>
                            <h3 class='flex ${n}'>${i===`eng`?`full name `:` الاسم بالكامل`} <span class=" text-[var(--text-main)]"> ${o.full_name[i]}</span></h3>
                            <p class='${n}'>${i===`eng`?`Gender:`:`:جنس`} <span class='text-[var(--text-main)]'>${o.gender[i]}</span></p>
                            <p class='${n}'>${i===`eng`?`country:`:`:الدوله`} <span class='text-[var(--text-main)]'>${o.country[i]}</span></p>
                            <div id="check_control" class='relative w-[50px] cursor-pointer  check_control overflow-hidden h-[20px] rounded-full bg-[var(--bg-input)]'>
                                    <span class='absolute w-0 f_check_control h-full bg-blue-500 start-0 top-0'>
                                        <span class='absolute n_check_control w-[20px] h-[20px]  start-0 top-[0px] rounded-full bg-white'></span>
                                    </span>
                            </div>
                        </div>
                        <hr class='border-[var(--border-color)] my-7'>

                    
                    </div>

                    <div class='flex-1    border border-transparent  border-s-[var(--border-color)]'>
                            <h3 class='${n} pb-4 ps-5'>${i===`eng`?` Personal Information`:`المعلومات الشخصيه`}</h3>

                        <div class='flex gap-10 flex-wrap ps-5 items-center'>
                            <h3 class='flex ${n}'>${i===`eng`?`email:`:` :الاميل`} <span class=" text-[var(--text-main)]"> ${s.email}</span></h3>
                            <p class='${n}'>${i===`eng`?`date:`:`:التاريخ`} <span class='text-[var(--text-main)]'>${s.date_of_birth}</span></p>
                            <p class='${n}'>${i===`eng`?`phone:`:`:الهاتف`} <span class='text-[var(--text-main)]'>${s.phone}</span></p>
                            <div id="check_control" class='relative w-[50px] cursor-pointer  check_control overflow-hidden h-[20px] rounded-full bg-[var(--bg-input)]'>
                                    <span class='absolute w-0 f_check_control h-full bg-blue-500 start-0 top-0'>
                                        <span class='absolute n_check_control w-[20px] h-[20px]  start-0 top-[0px] rounded-full bg-white'></span>
                                    </span>
                            </div>
                        </div>
                        <hr class='border-[var(--border-color)] my-7'>

                    
                    </div>

                    <div class='flex-1 border border-transparent  border-s-[var(--border-color)]'>
                            <h3 class='${n} pb-4 ps-5'>${i===`eng`?` Job Information`:`معلومات العمل`}</h3>

                        <div class='flex gap-10 flex-wrap ps-5 items-center'>
                            <h3 class='flex ${n}'>${i===`eng`?`title:`:` :العنوان`} <span class=" text-[var(--text-main)]"> ${c.title[i]}</span></h3>
                            <p class='${n}'>${i===`eng`?`programming language:`:`:لغات البرمجه`} <span class='text-[var(--text-main)]'>${c.programming_language}</span></p>
                            <p class='${n}'>${i===`eng`?`Years Of Experience:`:`:سنوات الخبره`} <span class='text-[var(--text-main)]'>${c.years_of_experience}</span></p>
                            <div id="check_control" class='relative w-[50px] cursor-pointer  check_control overflow-hidden h-[20px] rounded-full bg-[var(--bg-input)]'>
                                    <span class='absolute w-full f_check_control h-full bg-blue-500 start-0 top-0'>
                                        <span class='absolute n_check_control w-[20px] h-[20px]  start-0 top-[0px] rounded-full bg-white'></span>
                                    </span>
                            </div>
                        </div>
                        <hr class='border-[var(--border-color)] my-7'>

                    
                    </div>

                    <div class='flex-1 border border-transparent  border-s-[var(--border-color)]'>
                            <h3 class='${n} pb-4 ps-5'>${i===`eng`?`  Billing Information`:`معلومات الفواتير`}</h3>

                        <div class='flex gap-10 flex-wrap ps-5 items-center'>
                            <p class='${n}'>${i===`eng`?`Payment Method:`:`:طريقة الدفع:`} <span class='text-[var(--text-main)]'>${l.payment_method}</span></p>
                            <p class='${n}'>${i===`eng`?`email:`:`:الاميل`} <span class='text-[var(--text-main)]'>${l.email}</span></p>
                            <p class='${n}'>${i===`eng`?`Subscription:`:`:اشتراك`} <span class='text-[var(--text-main)]'>${l.subscription[i]}</span></p>
                            <div id="check_control" class='relative w-[50px] cursor-pointer  check_control overflow-hidden h-[20px] rounded-full bg-[var(--bg-input)]'>
                                    <span class='absolute w-full f_check_control h-full bg-blue-500 start-0 top-0'>
                                        <span class='absolute n_check_control w-[20px] h-[20px]  start-0 top-[0px] rounded-full bg-white'></span>
                                    </span>
                            </div>
                        </div>
                        <hr class='border-[var(--border-color)] my-7'>

                    
                    </div>


                </div>


             </div>

             
                <div class ="gap-5  mt-5 grid md:grid-cols-2 lg:grid-cols-3 p-4  rounded-lg overflow-hidden md:px-6 py-6 ">
                    <div class='${r} p-4 rounded-md overflow-hidden col-span-1 lg:col-span-1'>
                           <div class=" mb-4">
                                <h2 class="pb-3  ${t}">${i===`eng`?`my skills`:`مهاراتي`}</h2>
                                <p class='${n}'>${i===`eng`?`  Complete Skills List`:`قائمة المهارات الكاملة`}</p>
                            </div>

                            ${u.map(e=>`

                                    <div class='flex items-center gap-3'>
                                        ${e.map(e=>`<p class='px-3 py-1 rounded-md bg-[var(--bg-hover)] text-[var(--text-main)]'>${e}</p>`).join(``)}
                                    </div>
                                   <hr class='border-[var(--border-color)] my-7'>
                                `).join(``)}

                    </div>

                    <div class='${r} p-4 rounded-md overflow-hidden col-span-1 lg:col-span-2'>
                           <div class=" mb-4">
                                <h2 class="pb-3  ${t}">${i===`eng`?`Latest Activities`:`أحدث الأنشطة`}</h2>
                                <p class='${n}'>${i===`eng`?`Latest Activities Done By The User`:`أحدث الأنشطة التي قام بها المستخدم`}</p>
                            </div>

                            ${d.map(e=>(console.log(e),`

                                    <div class='flex-col flex sm:flex-row sm:justify-between items-center justify-center'>
                                        <div class='flex-col flex sm:flex-row items-center'>
                                            <img class='w-15 h-15 rounded-full me-3' src="${e.src}" alt="img">
                                            <div>
                                                <h3 class='text-[var(--text-main)]'>${e.title[i]}</h3>
                                                <p class='text-[var(--text-muted)]'>${e.description[i]}</p>
                                            </div>
                                        </div>
                                        <div>
                                        <p class='text-[var(--text-main)]'>${e.time}</p>
                                        <p class='text-[var(--text-muted)]'>${e.date[i]}</p>
                                        </div>

                                    </div>
                                   <hr class='border-[var(--border-color)] my-7'>

                                `)).join(``)}

                    </div>
                </div>



                
        </div>
    `};function w(e,t){let n=`text-[var(--text-main)] text-xl font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] overflow-hidden  rounded-md">
                <div class=" overflow-hidden  rounded-md">
                    <div class="py-5 px-4">
                        <div class=" mb-4">
                            <h2 class="  ${n}">${t===`eng`?`Site Control`:`التحكم في الموقع`}</h2>
                            <p class='${r}'>${e[t].message}</p>
                        </div>
                        <div class='flex items-center justify-between'>
                            <div>
                                <h2 class="  ${n}">${t===`eng`?`Website Control`:`التحكم في الموقع`}</h2>
                                <p class='${r}'>${t===`eng`?`Open/Close Website And Type The`:`افتح/أغلق الموقع الإلكتروني واكتب السبب`}</p>
                            </div>
                            <div id="check_control" class='relative w-[50px] cursor-pointer  check_control overflow-hidden h-[25px] rounded-full bg-[var(--bg-input)]'>
                                <span class='absolute w-0 f_check_control h-full bg-blue-500 start-0 top-0'>
                                    <span class='absolute n_check_control w-[20px] h-[20px]  start-0 top-[2px] rounded-full bg-white'></span>
                                </span>
                            </div>
                            
                        </div>
                        <div class='pt-7'>
                            <textarea class='w-full ${r} rounded-md p-3 bg-[var(--bg-input)]' placeholder="close message content"></textarea>

                        </div>
                    </div>
                 
                </div>
            </div>
            `}function T(e,t){let n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class=" overflow-hidden overflow-hidden bg-[var(--bg-card)] rounded-md">
                    <div class="py-5 px-4">
                        <div class=" mb-4">
                            <h2 class="  text-[var(--text-main)] text-xl font-semibold">${t===`eng`?`Site Control`:`التحكم في الموقع`}</h2>
                            <p class='${n}'>${t===`eng`?`General Information About Your Account`:`معلومات عامة حول حسابك`}</p>
                        </div>

                        <div class='pb-5'>
                            <p class='${n} pb-3'>${t===`eng`?`first name`:`الاسم الاول`}</p>
                            <input class='w-full p-2 bg-[var(--bg-input)] ${n} rounded-md' type="text" placeholder="first name">
                        </div>
                          <div>
                            <p class='${n} pb-3'>${t===`eng`?`last name`:`الاسم الاخير`}</p>
                            <input class='w-full p-2 bg-[var(--bg-input)] ${n} rounded-md' type="text" placeholder="last name">
                        </div>
                         <div class='flex items-center'>
                            <div>
                                <p class='${n} pb-3'>${t===`eng`?`last name`:`الاسم الاخير`}</p>
                               <input class='w-full cursor-not-allowed p-2 bg-[var(--bg-input)] ${n} rounded-md' type="email" placeholder="o@nn.sa" disabled>
                            </div>
                            <p class='ps-5 cursor-pointer uppercase pt-8 text-blue-500 flex items-center'>${t===`eng`?`change`:`تغيير`}</p>
                        </div>
                    </div>
                 
                </div>
            `}function E(e,t){let n=`text-[var(--text-main)] text-xl font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] overflow-hidden  rounded-md">
                <div class=" overflow-hidden  rounded-md">
                    <div class="py-5 px-4">
                        <div class=" mb-4">
                            <h2 class="  ${n}">${t===`eng`?`Security`:`معلومات امنيه`}</h2>
                            <p class='${r}'>${t===`eng`?`Security Information About Your Account`:`معلومات أمنية حول حسابك`}</p>
                        </div>
                        
                        <div class='flex items-center justify-between '>
                            <div>
                                <p class='${n}'>${t===`eng`?`passwword`:`كلمة السر`}</p>
                                <p class='${r}'> ${t===`eng`?`Last Change On 25/10/2021`:`آخر تعديل في 25/10/2021`}</p>
                            </div>
                            <button class='bg-blue-500 text-white px-2 py-1 rounded-md'>${t===`eng`?`change`:`تغيير`}</button>
                        </div>

                        <hr class='border-[var(--border-color)] my-7'>
                        <div class='flex items-center justify-between'>
                            <div>
                                <h2 class="  ${n}">${t===`eng`?`Website Control`:`التحكم في الموقع`}</h2>
                                <p class='${r}'>${t===`eng`?`Open/Close Website And Type The`:`افتح/أغلق الموقع الإلكتروني واكتب السبب`}</p>
                            </div>
                            <div id="check_scur" class='relative w-[50px] cursor-pointer  check_control overflow-hidden h-[25px] rounded-full bg-[var(--bg-input)]'>
                                <span class='absolute w-0 f_check_control h-full bg-blue-500 start-0 top-0'>
                                    <span class='absolute n_check_control w-[20px] h-[20px]  start-0 top-[2px] rounded-full bg-white'></span>
                                </span>
                            </div>
                            
                        </div>

                        <hr class='border-[var(--border-color)] my-7'>


                         <div class='flex items-center justify-between '>
                            <div>
                                <p class='${n}'>${t===`eng`?`Devices`:`اجهزة`}</p>
                                <p class='${r}'> ${t===`eng`?`check the login devices list`:`تفقد الاجهزه المسجلة`}</p>
                            </div>
                            <button class='bg-[var(--bg-hover)] text-white px-2 py-1 rounded-md'>${t===`eng`?`devices`:`اجهزة`}</button>
                        </div>
                        
                    </div>
                 
                </div>
            </div>
            `}function D(e,t){let n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] overflow-hidden  rounded-md">
                <div class=" overflow-hidden  rounded-md">
                    <div class="py-5 px-4">
                        <div class=" mb-4">
                            <h2 class="  text-[var(--text-main)] text-xl font-semibold">${t===`eng`?`Social Info`:`معلومات اجتامعية`}</h2>
                            <p class='${n}'>${t===`eng`?` Social Media Information`:`معلومات وسائل التواصل الاجتماعي`}</p>
                        </div>

                        <div>
                            <ul>
                                <li class='flex mb-4 border border-[var(--border-color)] px-2 bg-gray-700/10 rounded-md overflow-hidden'>
                                    <span class='${n} border px-2 py-2 border-transparent border-e-[var(--border-color)]'>twitter</span>
                                    <span class='${n} py-2 px-2'>twitter username</span>
                                </li>
                                <li class='flex mb-4 border border-[var(--border-color)] px-2 bg-gray-700/10 rounded-md overflow-hidden'>
                                    <span class='${n} border px-2 py-2 border-transparent border-e-[var(--border-color)]'>facebook</span>
                                    <span class='${n} py-2 px-2'>facebook username</span>
                                </li>
                                <li class='flex mb-4 border border-[var(--border-color)] px-2 bg-gray-700/10 rounded-md overflow-hidden'>
                                    <span class='${n} border px-2 py-2 border-transparent border-e-[var(--border-color)]'>linkedIn</span>
                                    <span class='${n} py-2 px-2'>linkedIn username</span>
                                </li>
                                <li class='flex border mb-4 border-[var(--border-color)] px-2 bg-gray-700/10 rounded-md overflow-hidden'>
                                    <span class='${n} border px-2 py-2 border-transparent border-e-[var(--border-color)]'>youtube</span>
                                    <span class='${n} py-2 px-2'>youtube username</span>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                 
                </div>
            </div>
            `}function O(e,t){return`<div class="col-span-1 bg-[var(--bg-card)] overflow-hidden  rounded-md">
                            <div class=" overflow-hidden  rounded-md">
                                <div class="py-5 px-4">
                                    <div class=" mb-4">
                                        <h2 class="pb-3  text-[var(--text-main)] text-xl font-semibold">${t===`eng`?`Widgets Control`:`التحكم في الأدوات`}</h2>
                                        <p class='dark:text-[var(--text-muted)] text-[var(--text-muted)]'>${t===`eng`?` Show/Hide Widgets`:`اظهار/اخفاء التحكم`}</p>
                                    </div>

                                    ${[{id:`quick-draft`,checked:!0,eng:`Quick Draft`,ar:`مسودة سريعة`},{id:`yearly-targets`,checked:!0,eng:`Yearly Targets`,ar:`الأهداف السنوية`},{id:`tickets-stats`,checked:!0,eng:`Tickets Statistics`,ar:`إحصائيات التذاكر`},{id:`latest-news`,checked:!0,eng:`Latest News`,ar:`آخر الأخبار`},{id:`latest-tasks`,checked:!1,eng:`Latest Tasks`,ar:`آخر المهام`},{id:`top-search`,checked:!0,eng:`Top Search Items`,ar:`الأكثر بحثاً`}].map(e=>`
                                        <label class="flex pb-4 items-center gap-3 cursor-pointer select-none py-1">
                                        <input 
                                            type="checkbox" 
                                            data-widget="${e.id}"
                                            class="widget-checkbox w-5 h-5 accent-blue-600 rounded cursor-pointer" 
                                            ${e.checked?`checked`:``}
                                        >
                                        <span class="text-gray-700 dark:text-gray-200 text-sm">
                                            ${t===`eng`?e.eng:e.ar}
                                        </span>
                                        </label>
                                    `).join(``)}
                                </div>

                                
                            
                            
                            </div>
                        </div>
            `}function k(e,t){let n=`text-[var(--text-main)] text-xl font-semibold`,r=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`<div class="col-span-1 bg-[var(--bg-card)] overflow-hidden  rounded-md">
                            <div class=" overflow-hidden  rounded-md">
                                <div class="py-5 px-4">
                                    <div class=" mb-4">
                                        <h2 class="pb-3  ${n}">${t===`eng`?`Backup Manager`:`مدير النسخ الاحتياطي`}</h2>
                                        <p class='${r}'>${t===`eng`?`  Control Backup Time And Location`:`التحكم في وقت ومكان النسخ الاحتياطي`}</p>
                                    </div>

                                    <label class='flex items-center mb-3 cursor-pointer'>

                                        <input class='me-1 me-1 w-5 me-3 h-5' type="radio" name="backup-frequency" value="daily" checked>
                                        <span class='${r}'>${t===`eng`?`daily`:`يوميا`}</span>
                                    </label>
                                    <label class='flex items-center mb-3 cursor-pointer'>

                                        <input class='me-1 me-1 w-5 h-5 me-3' type="radio" name="backup-frequency" value="daily" checked>
                                        <span class='${r}'>${t===`eng`?`weekly`:`اسبوعي`}</span>
                                    </label>
                                    <label class='flex items-center mb-3 cursor-pointer'>

                                        <input class='me-1 w-5 h-5 me-3' type="radio" name="backup-frequency" value="daily" checked>
                                        <span class='${r}'>${t===`eng`?`monthly`:`شهري`}</span>
                                    </label>
                                    <hr class='border-[var(--border-color)] my-7'>

                                     <div class='flex justify-around'>
                                         
                                        <div class='text-center'>
                                            <div class='flex-col pb-4 justify-center items-center'>
                                                <P class='text-5xl font-extrabold'>_</P>
                                                <P class='text-5xl font-extrabold'>_</P>
                                            </div>
                                            <p class='${n}'>Megaman</p>
                                            
                                        </div>
                                        <div class='text-center'>
                                            <div class='flex-col pb-4 justify-center items-center'>
                                                <P class='text-5xl font-extrabold'>_</P>
                                                <P class='text-5xl font-extrabold'>_</P>
                                            </div>
                                            <p class='${n}'>Megaman</p>
                                            
                                        </div>
                                        <div class='text-center'>
                                            <div class='flex-col pb-4 justify-center items-center'>
                                                <P class='text-5xl font-extrabold'>_</P>
                                                <P class='text-5xl font-extrabold'>_</P>
                                            </div>
                                            <p class='${n}'>Megaman</p>
                                            
                                        </div>
                                     
                                     </div>
                                   
                                </div>

                                
                            
                            
                            </div>
                        </div>
            `}var A=[{val:w,name:`siteControl`},{val:T,name:`securityInfo`},{val:E,name:`securityInfo`},{val:D,name:`securityInfo`},{val:O,name:`securityInfo`},{val:k,name:`securityInfo`}],j=e=>{if(e)return`

        <div class='overflow-hidden sittings w-[94%] py-5 md:w-[99%] mx-auto'>

             <h1 class='text-[var(--text-main)] text-xl font-semibold'>${e[1]===`eng`?`settings`:`الاعدادات`}</h1>
             <div class ="grid grid-cols-1    lg:grid-cols-2   xl:grid-cols-3 gap-5 md:px-6 py-6 ">
             ${A.map(t=>t.val(e[0][t.name],e[1])).join(``)}
             </div>
        </div>
    `},M=e=>{if(!e)return;let t=`text-[var(--text-main)] text-xl font-semibold`,n=e[1];return`

        <div class='overflow-hidden sittings w-[94%] py-5 md:w-[99%] mx-auto'>
             <h1 class='${t}'>${e[1]===`eng`?`plans`:`الخطط`}</h1>
             <div class ="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 md:px-6 py-6 ">

                ${e[0].map(e=>`
                            <div class='bg-[var(--bg-card)] col-span-1 md:order-[-1] p-4 shadow-md'>

                                <div class='outline-2 mb-4 outline-offset-2 outline-green-600 border-green-600'>
                                    <div class='flex flex-col items-center py-8   bg-green-600'>
                                        <p class='text-white font-bold text-xl'>${e[n].name}</p>
                                        <p class='text-white font-bold text-xl'>${e.price}$</p>
                                    </div>
                                </div>

                                ${e.features.map(e=>`<div class='flex items-center  justify-between'>
                                                    <div class='flex items-center'>
                                                         <i class='${e.icon}' style='color:${e.available?`green`:`red`}'></i>
                                                         <p class='${t} text-[16px] font-light ms-2'>${e[n]}</p>
                                                    </div>
                                                    <p class='cursor-pointer bg-[var(--text-muted)] grid place-content-center rounded-full w-7 h-7'>
                                                       <i class='text-white fa-solid fa-circle-info help'></i>
                                                    </p>

                                                </div>
                                              <hr class='border-[var(--border-color)] mb-7 mt-2'>
                                                
                                                `).join(``)}

                                
                                <p class='bg-green-600 w-13 cursor-pointer mt-10 text-white text-center rounded-md p-1'>${n===`eng`?`join`:`اتبع`}</p>

                            </div>

                        `).join(``)}

             </div>
        </div>
    `},N=e=>{if(!e)return;let t=`text-[var(--text-main)] text-xl font-semibold`,n=`dark:text-[var(--text-muted)] text-[var(--text-muted)]`;return`

        <div class='overflow-hidden sittings w-[94%] py-5 md:w-[99%] mx-auto'>

             <h1 class='${t}'>${e[1]===`eng`?`Projects`:`مشاريع`}</h1>
             <div class ="grid grid-cols-1    lg:grid-cols-2   xl:grid-cols-3 gap-5 md:px-6 py-6 ">
             

                    ${e[0].map(r=>`


                        <div class="col-span-1 relative bg-[var(--bg-card)] overflow-hidden p-4  rounded-md">
                                    <span class="absolute top-2 end-2 ${n}">${r.finishDate}</span>
                                    <div>

                                        <div class=" mb-4">
                                            <h2 class="  ${t} pb-3">${r[e[1]].name}</h2>
                                            <p class='${n}'>${r[e[1]].description}</p>
                                        </div>

                                        <ul class='flex'>
                                        ${r.team.map(e=>`
                                            <li class='rounded-full w-10 h-10 overflow-hidden'><img class='w-full h-full' src="${e}" alt="${e}"></li>
                                            `).join(``)}
                                        
                                        </ul>
                                    <hr class='border-[var(--border-color)] my-7'>
                                    <div>
                                        <div class='flex items-center flex-wrap md:flex-nowrap gap-3 justify-end'>

                                            ${r.categories.map(e=>`
                                                <p class='${n} p-2 rounded-md   text-sm bg-[var(--bg-hover)]'>${e}</p>
                                                `).join(``)}
                                        </div>

                                    </div>
                                    <hr class='border-[var(--border-color)] my-7'>
                                    
                                    <div class='flex justify-between items-center'>
                                        <div  class='relative w-[50%] h-2 prog_prog rounded-full bg-[var(--bg-input)]'>
                                            <span class='absolute w-[${r.progress}%] top-0 start-0 h-full bg-green-600 rounded-full '></span>
                                        </div>
                                        <p class='${n}'>$ ${r.price}</p>
                                    </div>
                                </div>
                        </div>


                        
                        `).join(``)}




             
             </div>
        </div>
    `};function P(){let e=(e,t)=>{let n=null,r=i=>{n||=i;let a=i-n,o=Math.min(a/e,1);t(o),o<1&&requestAnimationFrame(r)};requestAnimationFrame(r)},t=document.querySelector(`.mainprog`);document.querySelector(`.prog_prog`),t&&new IntersectionObserver(n=>{n.forEach(e=>{e.isIntersecting&&(console.log(`dan`),t.querySelectorAll(`.spanprog`).forEach(e=>{let t=e.dataset.width;e.querySelector(`span`),e.animate([{width:`0px`},{width:`${t}%`}],{duration:1e3,fill:`forwards`})}))}),e(1e3,e=>{t.querySelectorAll(`.spanprog`).forEach(t=>{let n=t.dataset.width,r=t.querySelector(`span`);r.textContent=`${Math.floor(e*Number(n))}%`})})},{root:null,rootMargin:`0px`,threshold:1}).observe(t)}var F=document.querySelector(`.main_lang`),I=F.querySelector(`.ul_lang`),L=document.getElementById(`bott`),R=F.querySelector(`p`),z=document.querySelector(`.dark_img`),B=document.querySelector(`.light_img`),V=document.querySelector(`.ul_nav`),H=localStorage.dir||`rtl`,U=localStorage.textDir||`eng`,W=document.getElementById(`darkTheme`),G=JSON.parse(localStorage.getItem(`dark`))||!1,K=document.querySelector(`main`),q={dashboard:b,settings:j,profile:C,projects:N,courses:a,friends:x,files:S,plans:M},J=async()=>await n();window.onload=async()=>{J()&&(V.innerHTML=i(await J(),U))},((e,t,n,r)=>{r?e.classList.add(`dark`):e.classList.remove(`dark`),r?(t.classList.remove(`hidden`),n.classList.add(`hidden`)):(t.classList.add(`hidden`),n.classList.remove(`hidden`))})(document.documentElement,B,z,G),W.addEventListener(`click`,e=>{e.currentTarget,G=!G,localStorage.setItem(`dark`,G),G?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`),z.classList.toggle(`hidden`),B.classList.toggle(`hidden`)}),((e,t,n)=>{t.textContent=n,document.documentElement.dir=e})(H,R,U),F.addEventListener(`click`,e=>{let t=e.currentTarget;t.querySelector(`p`),t.querySelectorAll(`li`),I.classList.toggle(`h-0`)}),I.addEventListener(`click`,async e=>{if(e.target.tagName===`LI`){let t=e.target,n=F.querySelector(`p`),a=e.target.textContent;n.textContent=a,n.textContent=a,document.documentElement.dir=t.id,localStorage.setItem(`dir`,t.id),localStorage.setItem(`textDir`,a),V.innerHTML=i(await J(),a),K.innerHTML=await X(Y,r,q),P()}});var Y=()=>location.pathname.split(`/`).pop(),X=async(e,t,n,r)=>{if(!e)return;let i=e()||`dashboard`,a=await t(i,localStorage.getItem(`textDir`));if(a.length>1)return n[i](a)};window.addEventListener(`popstate`,async e=>{Y();let t=await X(Y,r,q);return K.innerHTML=t,P(),t}),V.addEventListener(`click`,async e=>{let t=e.target.closest(`.li_nav`).id;t&&(history.pushState(null,``,t),K.innerHTML=await X(Y,r,q),P())}),K.innerHTML=await X(Y,r,q),P(),L.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});var Z=e=>{if(e){let t=e.querySelector(`.f_check_control`),n=t.querySelector(`span`);t.classList.toggle(`w-full`),n.classList.contains(`start-0`)?(n.classList.remove(`start-0`),n.classList.add(`end-0`)):(n.classList.add(`start-0`),n.classList.remove(`end-0`))}};K.addEventListener(`click`,e=>{let t=e.target.closest(`.check_control`),n=e.target.closest(`.check_scur`);Z(t),Z(n)});