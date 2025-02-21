import reflex as rx
from reflex_image_zoom import image_zoom

def uiverse_card(src: str = "/revista1.jpg") -> rx.Component:
    return rx.box(
        # Contenedor para la imagen (placeholder)
        rx.box(
            image_zoom(
                rx.image(src=src, alt="Card image"),
                class_name="w-full sm:w-52 h-auto sm:h-40 bg-sky-300 rounded-2xl",
            ),
            class_name="flex justify-center items-center",
        ),
        class_name=(
            "w-full sm:w-60 h-auto sm:h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 "
            "flex flex-col items-center justify-center hover:bg-gray-900 "
            "hover:shadow-2xl hover:shadow-sky-400 transition-shadow"
        ),
    )

def uiverse_hover_card() -> rx.Component:
    return rx.box(
        # Círculo de fondo que se expande en hover.
        rx.text(
            "",
            as_="span",
            class_name=(
                "absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r "
                "from-slate-200 to-slate-700 opacity-75 transition-all duration-500 "
                "transform group-hover:scale-[20]"
            ),
        ),
        # Contenedor central de contenido.
        rx.box(
            # Icono central: se usa rx.icon("message-circle-more")
            rx.text(
                rx.icon("palette", class_name="h-12 w-12 text-white transition-all"),
                as_="span",
                class_name=(
                    "grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r "
                    "from-slate-500 to-slate-700 transition-all duration-500 transform "
                    "group-hover:bg-gradient-to-r group-hover:from-slate-600 group-hover:to-slate-300"
                ),
            ),
            # Bloque de texto descriptivo.
            rx.box(
                rx.text(
                    "Elevate your experience with smoother transitions and vibrant design. "
                    "Perfect for prototyping and sharing ideas in style.",
                    class_name="font-medium",
                ),
                class_name=(
                    "space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 "
                    "group-hover:text-white"
                ),
            ),
            # Llamado a la acción.
            rx.box(
                rx.text(
                    "Explore Documentation →",
                    as_="span",
                    class_name="text-purple-500 transition-all duration-500 group-hover:text-white",
                ),
                class_name="pt-6 text-lg font-semibold leading-7",
            ),
            class_name="relative z-10 mx-auto max-w-md",
        ),
        class_name=(
            "group relative cursor-pointer overflow-hidden bg-slate-300 rounded-2xl px-6 pt-12 pb-10 "
            "shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 "
            "hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
        ),
    )