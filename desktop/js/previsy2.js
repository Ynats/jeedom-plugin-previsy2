
/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */


$("#table_cmd").sortable({axis: "y", cursor: "move", items: ".cmd", placeholder: "ui-state-highlight", tolerance: "intersect", forcePlaceholderSize: true});

/*
 * Fonction pour l'ajout de commande, appellé automatiquement par plugin.template
 */

// Sur la partie Debug
$('#bt_previsy2Debug').off('click').on('click', function () {
    $('#md_modal').dialog({title: "{{Debug}}"});
    $('#md_modal').load('index.php?v=d&plugin=previsy2&modal=debug').dialog('open');
});

function on_neige(){
    $('input[data-l2key=no_neige]').prop('checked', false);
}

function on_no_neige(){
    $('input[data-l2key=neige]').prop('checked', false);
}

function on_pluie(){
    $('input[data-l2key=no_pluie]').prop('checked', false);
}

function on_no_pluie(){
    $('input[data-l2key=pluie]').prop('checked', false);
}
