import reflex as rx
from reflex_image_zoom import image_zoom

# def collections_section() -> rx.Component:
#     return rx.box(
#         # Contenedor externo con fondo gris claro.
#         rx.box(
#             # Contenedor central con ancho máximo y padding responsivo.
#             rx.box(
#                 # Título principal de la sección.
#                 rx.heading("Collections", size="6", class_name="text-2xl font-bold text-gray-900"),
#                 class_name="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10",
#             ),
#             # Contenedor de la grilla de colecciones.
#             rx.box(
#                 # La grilla se compone de 3 tarjetas en pantallas grandes, y en pantallas pequeñas se muestra de forma vertical.
#                 rx.box(
#                     # Tarjeta 1: Desk and Office
#                     rx.box(
#                         rx.image(
#                             src="/revista1.jpg",
#                             alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
#                             class_name="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1",
#                         ),
#                         # Título con enlace (usando el prop as_ para renderizar el heading como <h3> y el enlace contiene un <span> semántico).
#                         rx.heading(
#                             rx.link(
#                                 # Span vacío para ocupar el espacio absoluto (según el HTML original).
#                                 rx.box("", as_="span", class_name="absolute inset-0"),
#                                 rx.text("Desk and Office"),
#                                 href="#",
#                             ),
#                             as_="h3",
#                             class_name="mt-6 text-sm text-gray-500",
#                         ),
#                         # Descripción.
#                         rx.text("Work from home accessories", class_name="text-base font-semibold text-gray-900"),
#                         # class_name="group relative",
#                     ),
#                     # Tarjeta 2: Self-Improvement
#                     rx.box(
#                         image_zoom(
#                             rx.image(
#                                 src="/revista2.jpg",
#                                 alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
#                                 class_name="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1",
#                             ),
#                             ),
#                         # rx.heading(
#                         #     rx.link(
#                         #         rx.box("", as_="span", class_name="absolute inset-0"),
#                         #         rx.text("Self-Improvement"),
#                         #         href="#",
#                         #     ),
#                         #     as_="h3",
#                         #     class_name="mt-6 text-sm text-gray-500",
#                         # ),
#                         rx.text("Journals and note-taking", class_name="text-base font-semibold text-gray-900"),
#                         class_name="group relative",
#                     ),
#                     # Tarjeta 3: Travel
#                     rx.box(
#                         rx.image(
#                             src="revista3.jpg",
#                             alt="Collection of four insulated travel bottles on wooden shelf.",
#                             class_name="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1",
#                         ),
#                         rx.heading(
#                             rx.link(
#                                 rx.box("", as_="span", class_name="absolute inset-0"),
#                                 rx.text("Travel"),
#                                 href="#",
#                             ),
#                             as_="h3",
#                             class_name="mt-6 text-sm text-gray-500",
#                         ),
#                         rx.text("Daily commute essentials", class_name="text-base font-semibold text-gray-900"),
#                         class_name="group relative",
#                     ),
#                     class_name="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0",
#                 ),
#                 class_name="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
#             ),
#         ),
#         class_name="bg-gray-100",
#     )

def collections_section() -> rx.Component:
    return rx.section(
        # Sección con fondo gris, padding vertical (py-16), y horizontal (px-4)
        rx.box(
            # Contenedor principal con ancho máximo y centrado
            rx.box(
                # 1) Encabezado de la sección
                rx.heading(
                    "Collections",
                    size="5",  # Ajusta el tamaño base de Reflex
                    class_name="text-3xl font-bold text-gray-900"
                ),
                rx.text(
                    "Explora nuestras selecciones para encontrar la pieza perfecta.",
                    class_name="mt-2 text-gray-600"
                ),
                # 2) Grilla de tarjetas
                rx.box(
                    # Tarjeta 1
                    rx.box(
                        image_zoom(
                        rx.image(
                            src="/revista1.jpg",
                            alt="Desk with accessories.",
                            class_name=(
                                "w-full rounded-lg bg-white object-cover "
                                "group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1"
                            ),
                        ),
                        ),
                        # rx.heading(
                        #     rx.link(
                        #         rx.box("", as_="span", class_name="absolute inset-0"),
                        #         rx.text("Desk and Office"),
                        #         href="#",
                        #     ),
                        #     as_="h3",
                        #     class_name="mt-4 text-sm text-gray-500",
                        # ),
                        rx.text(
                            "Work from home accessories",
                            class_name="text-base font-semibold text-gray-900"
                        ),
                        class_name="group relative"
                    ),
                    # Tarjeta 2
                    rx.box(
                        image_zoom(
                        rx.image(
                            src="/revista2.jpg",
                            alt="Wood table with mug and journal.",
                            class_name=(
                                "w-full rounded-lg bg-white object-cover "
                                "group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1"
                            ),
                        ),
                        ),
                        # rx.heading(
                        #     rx.link(
                        #         rx.box("", as_="span", class_name="absolute inset-0"),
                        #         rx.text("Self-Improvement"),
                        #         href="#",
                        #     ),
                        #     as_="h3",
                        #     class_name="mt-4 text-sm text-gray-500",
                        # ),
                        rx.text(
                            "Journals and note-taking",
                            class_name="text-base font-semibold text-gray-900"
                        ),
                        class_name="group relative"
                    ),
                    # Tarjeta 3
                    rx.box(
                        image_zoom(
                        rx.image(
                            src="/revista3.jpg",
                            alt="Collection of insulated travel bottles.",
                            class_name=(
                                "w-full rounded-lg bg-white object-cover "
                                "group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1"
                            ),
                        ),
                        ),
                        # rx.heading(
                        #     rx.link(
                        #         rx.box("", as_="span", class_name="absolute inset-0"),
                        #         rx.text("Travel"),
                        #         href="#",
                        #     ),
                        #     as_="h3",
                        #     class_name="mt-4 text-sm text-gray-500",
                        # ),
                        rx.text(
                            "Daily commute essentials",
                            class_name="text-base font-semibold text-gray-900"
                        ),
                        class_name="group relative"
                    ),
                    # Clases para hacer la grilla responsive:
                    # - Espacio vertical entre items en mobile (space-y-12),
                    # - En pantallas grandes (lg), 3 columnas y sin espacio vertical (space-y-0).
                    class_name=(
                        "mt-8 grid "
                        "space-y-12 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
                    ),
                ),
                class_name="mx-auto max-w-7xl"
            ),
            class_name="py-16 px-4 sm:px-6 lg:px-8"
        ),
        class_name="bg-gray-100",
        id="collections",
    )