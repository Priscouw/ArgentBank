import "../FeatureItem/FeatureItem.scss"

const featureItemList = [{
    img: "img/icon-chat.png",
    alt: "Chat Icon",
    title: "You are our #1 priority",
    content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
}
    ,
{
    img: "img/icon-money.png",
    alt: "Money Icon",
    title: "More savings means higher rates",
    content: "The more you save with us, the higher your interest rate will be!"
}
    ,
{
    img: "img/icon-security.png",
    alt: "Security Icon",
    title: "Security you can trust",
    content: " We use top of the line encryption to make sure your data and money is always safe."
}
]

const FeatureItem = () => {
    return (
        featureItemList.map((item) => (
            <div key={item.title} className="feature-item">
                <img src={item.img} alt={item.alt} className="feature-icon" />
                <h3 className="feature-item-title">{item.title}</h3>
                <p>{item.content}</p>
            </div>
        ))
    );
};

export default FeatureItem;