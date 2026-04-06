/**
 * Skills loading and matching — extracted for testability.
 */
export interface Skill {
    id: string;
    name: string;
    description: string;
    trigger: string[];
    content: string;
}
/**
 * Match skills whose triggers appear in the given message (case-insensitive).
 */
export declare function matchSkills(skills: Skill[], message: string): Skill[];
/**
 * Pick skill IDs relevant to a given chart type for generate_widget_code.
 */
export declare function getWidgetSkillIds(chartType?: string): string[];
