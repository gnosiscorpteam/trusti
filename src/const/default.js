import partnershipImage from "../assests/home/partner.jpg";
import serviceImage from "../assests/home/services.png";
import performanceImage from "../assests/home/performance.jpg";
import partnershipIcon from "../assests/home/handshake-deal-svgrepo-com 1.svg";
import serviceIcon from "../assests/home/customer-service-svgrepo-com.svg";
import performanceIcon from "../assests/home/response-monitoring-svgrepo-com 1.svg";
import partnershipTitle from "../assests/home/partnership-title.svg";
import serviceTitle from "../assests/home/services-title.svg";
import performanceTitle from "../assests/home/performance-title.svg";
import mail from "../assests/icon/mail.svg"
import phone from "../assests/icon/phone.svg"
import location from "../assests/icon/location.svg"
import mailSecondary from "../assests/icon/mail-secondary.svg"
import phoneSecondary from "../assests/icon/phone-secondary.svg"
import locationSecondary from "../assests/icon/location-secondary.svg"
import projectmanagement from "../assests/about/iStock-1334275024.jpg"
import contactmanagement from "../assests/about/iStock-1303505851.jpg"
import custombanking from "../assests/about/iStock-1324982693.png"

export const homeContent = [
    {
        title : partnershipTitle,
        content : "Our clients are so much more to us than that - you are our partners, our family and friends, our neighbors. Our goal for our contractor customers is to help you grow your business while simultaneously facilitating the installation and service of your customer's or project's needs in a way that reflects your values and core beliefs. Our goal for our property owner customers is to help protect your funds, your peace of mind, and your project experience so you can move forward.",
        image : partnershipImage,
        icon : partnershipIcon
    },
    {
        title : serviceTitle,
        content : "Our team of customer service experts continually go the extra mile for not only you, but also your clients, to ensure a seamless experience during their solar project timeline. With our fifteen minute SLA, meticulous attention to detail, and a true love and passion for helping others, you are guaranteed to experience a level of customer service you have been looking for for years.",
        image : serviceImage,
        icon : serviceIcon
    },
    {
        title : performanceTitle,
        content : "We know it is frustrating to see deals fall through and to see projects restricted from getting the product that they want from you for reasons beyond your control, or from a lack of training. Allowing our team to manage your projects will produce an influx of closed deals, increased satisfaction from your projects, and a stronger sense of accomplishment in your teams.  Providing lower attrition, greater confidence in your brand, and spurring energized performance.",
        image : performanceImage,
        icon : performanceIcon
    }
]

export const supportInfo = [
    {
        title:"tel:18448597371",
        icon : phone,
        info : "(844) 859-7371"
    },
    {
        title:"location",
        icon : location,
        info : "8600 Freeport Pkwy Suite 400 Irving TX 75063"
    },
    {
        title:"mailto:support@gotrusti.com",
        icon : mail,
        info : "support@gotrusti.com"
    }
]

export const supportInfo_secondary = [
    {
        icon : phoneSecondary,
        info : "(844) 859-7371",
        title:"tel:18448597371"
    },
    {
        icon : locationSecondary,
        info : "8600 Freeport Pkwy Suite 400 Irving TX 75063",
        title:"location"
    },
    {
        icon : mailSecondary,
        info : "support@gotrusti.com",
        title:"mailto:support@gotrusti.com"
    }
]

export const navbar_tabs = [
    {
        label : "Home",
        value : "/"
    },
    {
        label : "Project Finance Partners",
        value : "/financepartner"
    },
    {
        label : "About Us",
        value : "/aboutus"
    },
    {
        label : "Financial Protection",
        value : "/finance_protection"
    },
    {
        label : "Online Access",
        value : "/online_access"
    },
    {
        label : "Contact",
        value : "/contact"
    }
]

export const aboutusContent = [
    {
        img : projectmanagement,
        title : "Project Management",
        content : "Whether it's connecting your project with the team that is best qualified to accomplish your needs, managing granular details of the project so you are free to focus on closing more deals, or simply staying in touch with your customer to give them peace of mind, Trusti does it all. We have managed projects spanning from small electrical and new roofs on clients' homes to big brand project roll outs, Telecom infrastructure and more."
    },
    {
        img : custombanking,
        title : "Custom Banking Solutions",
        content : "We at Trusti feel the most important thing about getting jobs done is the funding. Keeping the money safe and keeping the project funded. Trusti partners with Priority Commerce for a custom banking solution designed and built for your project. We keep the project funds safe, funded, and the contractor capitalized in the best way possible leveraging our Contract and Project Management capabilities. We offer customer service, project oversight, base level arbitration, contract management, custom funding solutions and so much more!"
    },
    {
        img : contactmanagement,
        title : "Contract Management",
        content : "Here at Trusti, we understand peace of mind is one of the primary keys necessary to close deals and keep customers coming back. After all, oftentimes, a lot of the projects you work on affect the property owner's personal life. If your staff is having a difficult time relaying information about a project to your client in a way that makes them feel comfortable, we can help! Our subject matter experts will give your clients the peace of mind they need to move forward with their decision to purchase from your business. We custom design contracts identifying completion points, pain points, timelines and expectations and more. We hold all parties accountable to the contracts to ensure continuity of mindset and expectations for everyone."
    }
]

export const roofingEstimate = [
    {
        address : "Washington",
        link : "https://app.roofr.com/instant-estimator/535a29f1-376b-41a1-aa38-d41a8b89cda4/Trusti"
    },
    {
        address : "Oregon",
        link : "https://app.roofr.com/instant-estimator/bcef51f4-6694-4473-8bbc-a4a1e189db0b/Trusti"
    },
    {
        address : "Texas",
        link : "https://app.roofr.com/instant-estimator/bdc7b673-3d77-4ff4-9a20-d9a70fc0e47a/Trusti"
    },
    {
        address : "Massachusetts",
        link : "https://app.roofr.com/instant-estimator/68654de4-0213-457a-a4df-e2fc9c7059fd/Trusti"
    },
    {
        address : "California",
        link : "https://app.roofr.com/instant-estimator/5bebb5e9-80b3-4afb-8639-609c910e2cfa/Trusti"
    },
    {
        address : "Floridia (Without Miami Area)",
        link : "https://app.roofr.com/instant-estimator/8d0c1484-036f-4d9f-b5ce-6b0ff49d00a8/Trusti"
    },
    {
        address : "Pennsylvania",
        link : "https://app.roofr.com/instant-estimator/b941631a-621e-4103-881f-ef7f4574764f/Trusti"
    },
    {
        address : "North and South Carolina",
        link : "https://app.roofr.com/instant-estimator/e94d70b6-006f-49f8-984a-3dca03d843a8/Trusti"
    }
]

export const locations = [
    {
        location : "Washington address",
        street : "100 N Howard st ste R",
        address : "Spokane, WA 99201"
    },
    {
        location : "Texas Address",
        street : "8600 Freeport Pkwy Suite 400",
        address : "Irving TX 75063"
    },
    {
        location : "Virginia Address",
        street : "4445 Corporation Ln ste 264",
        address : "Virginia Beach, VA 23462"
    },
    {
        location : "Oregon Address",
        street : "9620 NE Tanasbourne Dr Suite 300 #1039",
        address : "Hillsboro, OR 97124"
    },
    {
        location : "Oklahoma Address",
        street : "6608 N Western Avenue #1583",
        address : "Oklahoma City, OK 73116"
    },
    {
        location : "North Carolina Address",
        street : "6135 Park South Drive Ste 510",
        address : "Charlotte, NC 28210"
    },
    {
        location : "South Carolina Address",
        street : "1985 Riviera Dr Ste 103 - 1006",
        address : "Mount Pleasant, SC 29464"
    },
    {
        location : "Ohio Address",
        street : "3296 Westerville Rd #1057",
        address : "Columbus, OH 43224"
    },
    {
        location : "Florida Address",
        street : "7901 4th St N, STE 300",
        address : "St. Petersburg , FL 33702"
    },
    {
        location : "California Address",
        street : "1401 21st  st STE R",
        address : "Sacramento CA 95811"
    },
]