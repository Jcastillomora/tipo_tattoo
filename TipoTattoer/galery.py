import reflex as rx
from reflex_image_zoom import image_zoom
from .backend.backend import State, images

def galery():
    return rx.center(
        rx.grid(
            # "desempaquetamos" (usamos *) la lista de items
            *[  
                rx.card(
                    image_zoom(
                        rx.image(
                            src=item["src"],
                            # width="400px",
                            # height="400px",
                            class_name=item["img_class"]
                        )
                    ),
                    rx.badge(
                        rx.text(item["text"], size="4", weight="bold", class_name="text-center text-indigo-900 p-2"),
                        class_name="bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"
                    ),
                    spacing="2",
                    class_name="hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4",
                )
                for item in images
            ],
            columns=rx.breakpoints({"xs": "1", "sm": "2", "md": "3", "lg": "4"}),
            align="center",
            spacing="7",
            font_size="2em",
            id="galeria",
        )
    )

