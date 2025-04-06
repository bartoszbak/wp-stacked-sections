<?php
/**
 * Plugin Name: Stacked Cards Block
 * Description: A Gutenberg block that creates stacked cards with sticky positioning
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: stacked-cards-block
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Get file version based on file modification time
 */
function stacked_cards_get_file_version($file_path) {
    if (file_exists($file_path)) {
        return filemtime($file_path);
    }
    return '1.0.0';
}

/**
 * Register and enqueue block assets
 */
function stacked_cards_block_assets() {
    // Register and enqueue editor script
    wp_register_script(
        'stacked-cards-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n')
    );

    // Register and enqueue editor style
    wp_register_style(
        'stacked-cards-block-editor',
        plugins_url('build/index.css', __FILE__)
    );

    // Register and enqueue frontend style
    $frontend_style_path = plugin_dir_path(__FILE__) . 'build/frontend.css';
    wp_register_style(
        'stacked-cards-block',
        plugins_url('build/frontend.css', __FILE__),
        array(),
        stacked_cards_get_file_version($frontend_style_path)
    );

    // Enqueue frontend style
    wp_enqueue_style('stacked-cards-block');
}

/**
 * Register the block
 */
function stacked_cards_block_init() {
    register_block_type(__DIR__, array(
        'editor_script' => 'stacked-cards-block-editor',
        'editor_style'  => 'stacked-cards-block-editor',
        'style'         => 'stacked-cards-block',
    ));
}

// Hook the functions to WordPress actions
add_action('init', 'stacked_cards_block_init');
add_action('init', 'stacked_cards_block_assets');
add_action('wp_enqueue_scripts', 'stacked_cards_block_assets'); 