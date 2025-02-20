import reflex as rx

def banner_home() -> rx.Component:
    return rx.flex(
        rx.box(
            rx.box(
                rx.text(
                            "",
                            class_name="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]",
                            as_="span",
                        ),
                rx.text("Tipo Tattooer", class_name="p-10 font-bold inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-500 px-7 py-7 font-medium text-white backdrop-blur-3xl gap-2 undefined"),
                weight="bold",
                class_name=(
                    "text-white animate-pulse animate-duration-500"
                    # Tamaños de texto responsivos
                    "text-3xl sm:text-4xl md:text-5xl lg:text-5xl "
                    "relative inline-flex h-24 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                )
            ),
            class_name="w-full h-full flex text-left items-center p-10",
        ),
        # Ajuste de imagen de fondo
        background_image="url('/tipo_banner.JPG')",
        background_size="cover",
        background_position="center",
        background_repeat="no-repeat",
        # Altura responsiva: por ejemplo, 64 en móviles, 96 en tablets, screen completo en desktop
        class_name="w-full h-64 sm:h-96 md:h-screen",
    )


# def banner_home() -> rx.Component:
#     return rx.flex(
#         rx.box(
#             # Texto con clases responsivas
#             rx.text(
#                 "Tipo Tattooer",
#                 weight="bold",
#                 class_name="animate-pulse animate-duration-500 text-white "
#                            # Ajustamos el tamaño de texto en diferentes breakpoints
#                            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
#             ),
#             # Caja que centra el texto vertical y horizontalmente
#             class_name="w-full h-full py-10 flex items-center justify-center"
#         ),
#         # Imagen de fondo
#         background_image="url('/tipo_banner.JPG')",
#         background_size="cover",           # Mantiene la imagen escalada
#         background_position="center",      # Centra la imagen
#         background_repeat="no-repeat",     # Evita repeticiones de la imagen

#         # Usamos clases responsivas en lugar de width y height fijos
#         # Por ejemplo, h-screen puede ser útil si quieres el alto igual al alto de la ventana
#         # 'p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32' ajusta el padding según el tamaño de pantalla
#         class_name="w-full h-screen text-white contrast-125 "
#                    "p-4 sm:p-4 md:p-16 lg:p-24 xl:p-32 "
#                    "flex justify-center items-center",
#     )



# def banner_home() -> rx.Component:
#     return rx.flex(
#         rx.box(
            
#             rx.text("Tipo Tattooer", weight="bold", class_name="animate-pulse animate-duration-500 text-white"),
#             class_name="w-full h-full py-10",
#         ),
#         #dejar el banner en la parte superior
#         background_image="url('/tipo_banner.JPG')",
#         background_size="cover",
#         background_position="center",
#         background_repeat="no-repeat",
#         height="100%",
#         width="100%",
#         class_name="text-6xl text-white p-80 contrast-125",
#         # spacing="9",
#         justify_content="center",
#         # overflow="hidden",
#     )

# def banner_home() -> rx.Component:
#     return rx.box(
#         rx.image(
#             src="/tipo_banner.JPG",
#             alt="Responsive image",
#             # height="600px",
#             # width="100%",
#             # class_name="aspect-auto",
#             # object_fit="cover",
#             # object_position="top",
#             class_name="w-full h-auto",
#         ),
#         #dejar el banner en la parte superior
#         width="100%",
#         spacing="0",
#         # overflow="hidden",
#     )