import React from 'react'

export const AboutFast = () => {
    const cards = [
        {
          image: '../assets/avatar.jpg', // Reemplaza con tus imágenes
          name: 'Juan Pérez',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        },
        {
          image: '../assets/avatar.jpg',
          name: 'María López',
          text: 'Sed eget turpis a pede tempor malesuada. Vivamus euismod mauris eu elit.',
        },
        {
          image: '../assets/avatar.jpg',
          name: 'Carlos Gómez',
          text: 'In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam.',
        },
      ];
  return (
    <div>
        <section className="section">
            <div className="container">
                <div className="columns">
                {cards.map((card, index) => (
                    <div className="column" key={index}>
                    <div className="card">
                        <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={card.image} alt={card.name} className="is-rounded" /> 
                        </figure>
                        </div>
                        <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                            <p className="title is-4">{card.name}</p>
                            </div>
                        </div>
                        <div className="content">
                            {card.text}
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>
    </div>
  )
}
