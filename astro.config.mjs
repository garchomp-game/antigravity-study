// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Antigravity コンテキスト管理 完全ガイド',
			defaultLocale: 'ja',
			locales: {
				ja: { label: '日本語', lang: 'ja' },
			},
			sidebar: [
				{
					label: '第1章：全体像',
					items: [
						{ label: 'コンテキスト管理の全体像', link: '/01-overview/' },
					],
				},
				{
					label: '第2章：Rules',
					items: [
						{ label: 'AIの振る舞いを定義する', link: '/02-rules/' },
					],
				},
				{
					label: '第3章：Skills',
					items: [
						{ label: '必要なときだけ読み込む専門知識', link: '/03-skills/' },
					],
				},
				{
					label: '第4章：Knowledge Items',
					items: [
						{ label: 'セッションを超える記憶', link: '/04-knowledge/' },
					],
				},
				{
					label: '第5章：Artifacts',
					items: [
						{ label: '信頼のギャップを埋める作業記録', link: '/05-artifacts/' },
					],
				},
				{
					label: '第6章：Workflows & MCP',
					items: [
						{ label: '自動化と外部接続', link: '/06-workflows-mcp/' },
					],
				},
				{
					label: '第7章：最適化',
					items: [
						{ label: 'Compaction & コンテキスト最適化', link: '/07-optimization/' },
					],
				},
			],
		}),
	],
});
