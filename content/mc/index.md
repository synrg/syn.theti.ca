iNaturalist Minecraft resource pack: [inaturalist.zip](inaturalist.zip)

Contents unpacked to <tt>/files/</tt> for reference:

{% if collections.fileList.length > 0 %}
<table>
<tr>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Path</th>
</tr>
{% for file in collections.fileList %}  
<tr>
  <td><a href="{{ file.path }}" target="_blank">{{ file.name }}</a></td>
  <td>{{ file.path }}</td>
</tr>
{% endfor %}
</table>  
{% endif %}