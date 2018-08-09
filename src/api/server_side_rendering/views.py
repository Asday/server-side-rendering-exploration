from django.views.generic import TemplateView


class CatchAllPassThroughView(TemplateView):
    template_name = 'server_side_rendering/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['path'] = self.kwargs.get('path', '')

        return context
