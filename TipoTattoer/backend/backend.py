import os
import reflex as rx
import random
import smtplib
from googletrans import Translator
from twilio.rest import Client
from reflex.components.radix.themes.base import (
    LiteralAccentColor,
 )

TWILIO_ACCOUNT_SID ='ACebe4136dd78f2304217d2a0e4e8ccdb7'
TWILIO_AUTH_TOKEN='cbed8038912edd5ca63d53cfa5faf2fe'
TWILIO_WHATSAPP_NUMBER = "whatsapp:+16203373577"


# # message = client.messages.create(
# #   from_='whatsapp:+14155238886',
# #   message="pruebita",
# #   to='whatsapp:+56932653092'
# )
# message2 = client.messages.create(
#         from_='+16203373577',
#         body="este es un mensaje de prueba",
#         to='+56932653092',
#     )

images = [
    {
        "src": "/Dragonite destruturato.jpg",
        "text": "Dragonite destruturato",
        "category": "destruturato",  # Añadida categoría
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Ballena ilustrativa.jpg",
        "text": "Ballena ilustrativa",
        "category": "ilustrativo",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Astronauta ilustrativo.jpg",
        "text": "Astronauta ilustrativo",
        "category": "ilustrativo",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Sunflower destruturato.jpg",
        "text": "Sunflower destruturato",
        "category": "destruturato",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Axolote ilustrativo.jpg",
        "text": "Axolote ilustrativo",
        "category": "ilustrativo",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Faro destruturato.jpg",
        "text": "Faro destruturato",
        "category": "destruturato",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Manta raya destruturato.jpg",
        "text": "Manta raya destruturato",
        "category": "destruturato",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
    {
        "src": "/Sun&moon ilustrativo.jpg",
        "text": "Sun&moon ilustrativo",
        "category": "ilustrativo",
        "img_class": "transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg",
    },
]


chip_props = {
    "radius": "full",
    "variant": "surface",
    "size": "3",
    "cursor": "pointer",
    "style": {"_hover": {"opacity": 0.75}},
}



class State(rx.State):
    """The app state."""
    show_english: bool = False

    preference_id = "GENERATED_PREFERENCE_ID"


    # Textos en español
    es: dict = {
        "header": "Soy Ignacio, tatuador especializado en estilos destrutturato e ilustrativo. Mi pasión es crear diseños personalizados que expresen historias únicas. Con experiencia internacional, trabajo en estudios reconocidos, combinando técnica y creatividad para brindar un servicio de calidad. Me esfuerzo por conectar con mis clientes y plasmar su visión en arte permanente",
        "subtitle": "Conoce mis trabajos",
        "paragraph": "Este es un párrafo de ejemplo en español.",
        "nav1": "Home",
        "nav2": "Servicios",
        "nav3": "Contacto",
        "nav4": "Galería",
        "form_header": "Reserva tu cita",
        "form_text": "Completa el formulario para reservar tu cita",
        "wsp_text": "¡Contáctame por WhatsApp!",
    }

    # Textos en inglés (se llenan al traducir)
    en: dict = {
        "header": "",
        "subtitle": "",
        "paragraph": "",
        "nav1": "",
        "nav2": "",
        "nav3": "",
        "nav4": "",
        "form_header": "",
        "form_text": "",
        "wsp_text": "",
    }

    # Arrancas en español
    current_texts: dict = es 

    # selected_items: list[str] = skills[:3]

    all_areas: list[str] = ["Destructurato", "Ilustrativo"]

    selected_areas: list[str] = []

    search_term: str = ""

    message_status: str = ""

    phone_number: str = ""
    
    status_message: str = ""

    def set_phone_number(self, value: str):
        """
        Actualiza la variable phone_number mientras el usuario teclea.
        """
        self.phone_number = value

    def send_whatsapp_message(self):
        """
        Envía un mensaje de WhatsApp usando Twilio al número ingresado.
        """
        # Validar que el usuario haya ingresado algo
        if not self.phone_number:
            self.status_message = "Por favor, ingresa un número."
            return

        # Crear cliente Twilio
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

        # Construir número para Twilio => "whatsapp:+códigoPaisNúmero"
        to_number = f"whatsapp:{self.phone_number}"

        try:
            message = client.messages.create(
                body="¡Hola! Este es un mensaje automatizado desde Reflex + Twilio.",
                from_=TWILIO_WHATSAPP_NUMBER,
                to=to_number
            )
            self.status_message = f"Mensaje enviado correctamente (SID: {message.sid})"
        except Exception as e:
            self.status_message = f"Error al enviar mensaje: {str(e)}"


    @rx.event
    def add_area(self, area: str):
        if area not in self.selected_areas:
            self.selected_areas.append(area)

    @rx.event
    def remove_area(self, area: str):
        if area in self.selected_areas:
            self.selected_areas.remove(area)

    @rx.event
    def select_all_areas(self):
        self.selected_areas = list(self.all_areas)

    @rx.event
    def clear_areas(self):
        self.selected_areas.clear()

    # @rx.var
    # def filtered_images() -> list[dict]:
    #     term = State.search_term.value.lower().strip()
    #     selected_filters = State.selected_items.value

    #     # Filtrado por término de búsqueda
    #     if term:
    #         filtered = [
    #             img for img in images
    #             if term in img["text"].lower()
    #         ]
    #     else:
    #         filtered = images.copy()

    #     # Filtrado por categorías seleccionadas
    #     if selected_filters:
    #         filtered = [img for img in filtered if img["category"] in selected_filters]

    #     return filtered
  

    @rx.event
    async def translate_site(self):
        """
        Usa la librería asíncrona para traducir cada valor del dict 'es' al inglés,
        y los coloca en 'en'.
        Luego activa el modo inglés y actualiza 'current_texts'.
        """
        translator = Translator()
        for key, txt in self.es.items():
            result = await translator.translate(txt, dest="en")
            self.en[key] = result.text

        # Ahora que en[] está relleno, activamos la vista en inglés.
        self.show_english = True
        self.current_texts = self.en

    @rx.event
    def show_spanish(self):
        """
        Regresa a la vista en español.
        """
        self.show_english = False
        self.current_texts = self.es

    @rx.event
    async def toggle_language(self, value: bool):
        """
        Alterna entre inglés y español basado en el valor del switch.
        """
        if value:
            await self.translate_site()
        else:
            self.show_spanish()
    