import json

from django.apps import apps
from django.utils.functional import cached_property
from django.views.generic import TemplateView


app = apps.get_app_config('server_side_rendering')


class CatchAllPassThroughView(TemplateView):
    template_name = 'server_side_rendering/index.html'

    @cached_property
    def rendered_data(self):
        url = '/' + self.kwargs.get('path', '')

        return app.render_for_url(url)

    def get(self, request, *args, **kwargs):
        response = super().get(request, *args, **kwargs)

        status = self.rendered_data['context'].get('status', 200)
        response.status_code = status

        return response

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        rendered = self.rendered_data

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
