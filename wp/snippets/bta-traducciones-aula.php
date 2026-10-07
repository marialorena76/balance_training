<?php
/**
 * BTA — Traducciones del aula (BuddyBoss + LearnDash)
 * Pegar en Code Snippets → Añadir nuevo (tipo PHP) → "Ejecutar en todas partes" → Activar.
 * Traduce los textos que el tema y LearnDash dejan en inglés en el curso y las clases.
 * Si un texto no está en la lista, no se toca.
 */
function bta_aula_traducciones() {
	return array(
		'View %s details'     => 'Ver detalles del %s',
		'Start %s'            => 'Empezar %s',
		'%s Includes'         => 'Este %s incluye',
		'Continue %s'         => 'Continuar %s',
		'Resume %s'           => 'Retomar %s',
		'Enroll in this %s'   => 'Inscribite en este %s',
		'%s%% Complete'       => '%s%% completado',
		'Complete'            => 'Completado',
		'Last activity on %s' => 'Última actividad: %s',
		'Mark Complete'       => 'Marcar como completada',
		'Completed'           => 'Completada',
		'Next %s'             => '%s siguiente',
		'Previous %s'         => '%s anterior',
		'Back to %s'          => 'Volver al %s',
		'Expand All'          => 'Ver todo',
		'Collapse All'        => 'Contraer todo',
	);
}
function bta_aula_traducir( $translation, $text, $domain ) {
	if ( ! in_array( $domain, array( 'buddyboss-theme', 'learndash' ), true ) ) {
		return $translation;
	}
	$map = bta_aula_traducciones();
	return ( $translation === $text && isset( $map[ $text ] ) ) ? $map[ $text ] : $translation;
}
add_filter( 'gettext', 'bta_aula_traducir', 20, 3 );
add_filter( 'gettext_with_context', function ( $translation, $text, $context, $domain ) {
	return bta_aula_traducir( $translation, $text, $domain );
}, 20, 4 );
