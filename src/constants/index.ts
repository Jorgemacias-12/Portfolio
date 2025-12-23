import type { ProjectStatus, TranslationKey } from "@/types";

export const projectStatusLabelKeys: Record<ProjectStatus, TranslationKey> = {
  active: "components.project_status_badge.status_labels.active",
  maintenance: "components.project_status_badge.status_labels.maintenance",
  completed: "components.project_status_badge.status_labels.completed",
  paused: "components.project_status_badge.status_labels.paused",
  planned: "components.project_status_badge.status_labels.planned",
  in_evaluation: "components.project_status_badge.status_labels.in_evaluation",
};

export const projectStatusTooltipKeys: Record<ProjectStatus, TranslationKey> = {
  active: "components.project_status_badge.status_tooltips.active",
  maintenance: "components.project_status_badge.status_tooltips.maintenance",
  completed: "components.project_status_badge.status_tooltips.completed",
  paused: "components.project_status_badge.status_tooltips.paused",
  planned: "components.project_status_badge.status_tooltips.planned",
  in_evaluation:
    "components.project_status_badge.status_tooltips.in_evaluation",
};

export const baseBadgeClasses =
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium";

export const projectStatusBadgeClasses: Record<ProjectStatus, string> = {
  active:
    "bg-emerald-100 text-emerald-700 ring-emerald-200 " +
    "dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20",

  maintenance:
    "bg-blue-100 text-blue-700 ring-blue-200 " +
    "dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20",

  completed:
    "bg-rose-100 text-rose-700 ring-rose-200 " +
    "dark:bg-rose-500/10 dark:text-rose-400 dark:ring-rose-500/20",

  paused:
    "bg-amber-100 text-amber-700 ring-amber-200 " +
    "dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20",

  planned:
    "bg-violet-100 text-violet-700 ring-violet-200 " +
    "dark:bg-violet-500/10 dark:text-violet-400 dark:ring-violet-500/20",

  in_evaluation:
    "bg-cyan-100 text-cyan-700 ring-cyan-200 " +
    "dark:bg-cyan-500/10 dark:text-cyan-400 dark:ring-cyan-500/20",
};
