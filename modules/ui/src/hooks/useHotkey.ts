import { useSignalEffect } from '@preact/signals';
import { IHotkey, IHotkeyService, IHotkeyServiceSymbol } from '@undyingwraith/jaaf-browser';
import { useService } from './useService';

export function useHotkey(hotkey: IHotkey, action: () => void) {
	const hotkeyService = useService<IHotkeyService>(IHotkeyServiceSymbol);

	useSignalEffect(() => {
		const sym = hotkeyService.registerHotkey(hotkey, action);

		return () => {
			hotkeyService.removeHotkey(sym);
		};
	});
}
