import json

from django.apps import apps
from django.views.generic import TemplateView


app = apps.get_app_config('server_side_rendering')


class CatchAllPassThroughView(TemplateView):
    template_name = 'server_side_rendering/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        url = '/' + self.kwargs.get('path', '')
        rendered = app.render_for_url(url)

        context.update({
            'html_attributes': rendered['helmet']['htmlAttributes'],
            'base': rendered['helmet']['base'],
            'title': rendered['helmet']['title'],
            'meta': rendered['helmet']['meta'],
            'link': rendered['helmet']['link'],
            'style': rendered['helmet']['style'],
            'script': rendered['helmet']['script'],
            'noscript': rendered['helmet']['noscript'],
            'body_attributes': rendered['helmet']['bodyAttributes'],
            'html': rendered['html'],
            'state': json.dumps(rendered['state']),
        })

        return context
