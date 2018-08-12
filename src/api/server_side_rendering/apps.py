import json
import os
import re
import subprocess

from django.apps import AppConfig
from django.contrib.staticfiles import finders


class ServerSideRenderingConfig(AppConfig):
    name = 'server_side_rendering'
    verbose_name = 'Server Side Rendering'

    node = os.environ.get('NODE_EXECUTABLE', 'node')
    _re_node_version = re.compile(
        '(?P<major>\d+)\.(?P<minor>\d+)\.(?P<patch>\d+)$'
    )

    def ready(self):
        version = self.get_node_version()
        if version['major'] != '10':
            raise RuntimeError(
                f'The node version used, `{self.node}`, claims to be'
                f' version {version["major"]}, but this project depends'
                f' on node version 10.  If you have it installed,'
                f' please point me to it by setting the environment'
                f' variable `NODE_EXECUTABLE`.'
            )

    @classmethod
    def get_render_js_path(cls):
        return finders.find('dist/render.js')

    @classmethod
    def call_node(cls, *command):
        return subprocess.check_output([cls.node] + list(command)).decode()

    @classmethod
    def get_node_version(cls):
        raw_version = cls.call_node('--version').strip()
        match = cls._re_node_version.search(raw_version)

        if match is None:
            raise RuntimeError(
                f'The node version used, `{cls.node}`, responded'
                f' with an unrecognised version string:'
                f' "{raw_version}".  Node 10+ is required to run this'
                f' project.  If you have it installed, please point me'
                f' to it by setting the environment variable'
                f' `NODE_EXECUTABLE`.'
            )

        return match.groupdict()

    @classmethod
    def render_for_url(cls, url, initial_state=None):
        args = [cls.get_render_js_path(), url]
        if initial_state is not None:
            args.append(json.dumps(initial_state))

        return json.loads(cls.call_node(*args))
