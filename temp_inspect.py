from pathlib import Path
import re
text = Path('src/data/blogData.js').read_text(encoding='utf-8')
text = re.sub(r'import blog(\d+) from "\.\./assets/blog\1\.png";', lambda m: f'blog{m.group(1)} = "blog{m.group(1)}";', text)
text = text.replace('export const blogs = [', 'blogs = [')
ns = {}
exec(text, ns)
for slug in ['seo-services-bangalore-guide-2026','why-fast-websites-matter-2026','why-consistent-branding-matters-social-media-2026']:
    b = next((x for x in ns['blogs'] if x['slug'] == slug), None)
    print('slug', slug, 'found' if b else 'missing')
    if b:
        print(' content len', len(b['content']))
        print(' starts', repr(b['content'][:80]))
        print(' has h3', '<h3>' in b['content'], 'has /h3', '</h3>' in b['content'])
        print(' backticks', b['content'].count('`'))
        print('---')
